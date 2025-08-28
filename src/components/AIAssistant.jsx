import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Camera,
  Sparkles,
  Loader2,
  Download,
  Heart,
  Share2,
  RefreshCw,
} from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content:
        // "Hi there! I'm your creative AI buddy! 🎨 I can help you create amazing images just by describing what you want to see. Try saying something like 'a friendly dragon playing in a rainbow garden' or 'a magical castle in the clouds'!",
        "Hi there! 👋 I’m Luma, your creative buddy! I love turning your ideas into amazing pictures. 🎨✨ Just tell me what’s in your imagination, whether it’s a flying giraffe, a magical city, or your dream invention, and I’ll help bring it to life. Together, we can make your ideas shine bright like stars! 🌟",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Mock Whisk API integration - replace with actual API calls
  const generateImageWithWhisk = async (prompt) => {
    setIsGenerating(true);

    try {
      // This is where you'd integrate with Whisk API
      // For now, using placeholder logic
      const response = await mockWhiskAPI(prompt);

      const newImage = {
        id: Date.now(),
        url: response.imageUrl,
        prompt: prompt,
        timestamp: new Date(),
        liked: false,
      };

      setGeneratedImages((prev) => [...prev, newImage]);

      // Add assistant response with the image
      const assistantMessage = {
        id: Date.now() + 1,
        type: "assistant",
        content: `I've created your image! Here's "${prompt}" ✨`,
        image: newImage,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now(),
        type: "assistant",
        content:
          "Oops! I had trouble creating that image. Could you try describing it differently? 🤔",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsGenerating(false);
    }
  };

  // Mock API function - replace with actual Whisk integration
  const mockWhiskAPI = async (prompt) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate API delay

    // Return mock image based on prompt keywords
    const imageUrls = [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/b3b163a882-8c9cd26389bac7647515.png",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/4afcdfe405-2c6bf681b5e3e4f3a72c.png",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/de43d241d9-f6224617d46087a56283.png",
    ];

    return {
      imageUrl: imageUrls[Math.floor(Math.random() * imageUrls.length)],
      success: true,
    };
  };

  // Replace the mockWhiskAPI function with actual Whisk integration
  const generateImageWithWhisk1 = async (prompt) => {
    setIsGenerating(true);

    try {
      const response = await fetch("/api/whisk/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${WHISK_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          style: "child-friendly", // Ensure appropriate content
          safety_filter: true,
        }),
      });

      const data = await response.json();
      // Handle the response...
    } catch (error) {
      // Handle errors...
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Check if the message is requesting an image
    const isImageRequest =
      inputValue.toLowerCase().includes("create") ||
      inputValue.toLowerCase().includes("draw") ||
      inputValue.toLowerCase().includes("make") ||
      inputValue.toLowerCase().includes("image") ||
      inputValue.toLowerCase().includes("picture");

    const currentInput = inputValue;
    setInputValue("");

    if (isImageRequest) {
      await generateImageWithWhisk(currentInput);
    } else {
      // Regular chat response
      setTimeout(() => {
        const responses = [
          "That sounds amazing! Would you like me to create an image of that? 🎨",
          "I love your imagination! Want me to draw that for you? ✨",
          "Cool idea! I can make a picture of that if you'd like! 🖼️",
          "Awesome! Should I create an image to show what that looks like? 🌟",
        ];

        const assistantMessage = {
          id: Date.now(),
          type: "assistant",
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleImageLike = (imageId) => {
    setGeneratedImages((prev) =>
      prev.map((img) =>
        img.id === imageId ? { ...img, liked: !img.liked } : img
      )
    );
  };

  const regenerateImage = async (prompt) => {
    await generateImageWithWhisk(prompt + " (new version)");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-gradient-to-br from-[#FF4081] to-[#FFC107] rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <div className="relative">
              <Sparkles size={24} className="text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4CAF50] rounded-full animate-bounce"></div>
            </div>
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-20 right-0 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            Ask me to create amazing images! ✨
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF4081] to-[#FFC107] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">AI Art Buddy</h3>
                  <p className="text-sm opacity-90">Ready to create!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {message.type === "assistant" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FF4081] to-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles size={14} className="text-white" />
                  </div>
                )}

                <div
                  className={`max-w-xs ${
                    message.type === "user" ? "ml-auto" : ""
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-[#1A73E8] text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>

                  {/* Generated Image */}
                  {message.image && (
                    <div className="mt-3 bg-white rounded-2xl p-3 shadow-sm border">
                      <div className="relative">
                        <img
                          src={message.image.url}
                          alt={message.image.prompt}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        {isGenerating && (
                          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                            <div className="text-white text-center">
                              <Loader2
                                size={24}
                                className="animate-spin mx-auto mb-2"
                              />
                              <p className="text-sm">Creating magic...</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Image Actions */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleImageLike(message.image.id)}
                            className={`p-2 rounded-full transition-colors ${
                              message.image.liked
                                ? "bg-[#FF4081]/10 text-[#FF4081]"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            <Heart
                              size={16}
                              className={
                                message.image.liked ? "fill-current" : ""
                              }
                            />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                            <Share2 size={16} />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                            <Download size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => regenerateImage(message.image.prompt)}
                          className="p-2 rounded-full bg-[#4CAF50]/10 text-[#4CAF50] hover:bg-[#4CAF50]/20 transition-colors"
                        >
                          <RefreshCw size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Generating indicator */}
            {isGenerating && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF4081] to-[#FFC107] rounded-full flex items-center justify-center">
                  <Loader2 size={14} className="text-white animate-spin" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      Creating your image...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe what you want me to create..."
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4081] focus:border-transparent"
                  disabled={isGenerating}
                />
                <Camera
                  size={16}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isGenerating}
                className="w-12 h-12 bg-gradient-to-br from-[#FF4081] to-[#FFC107] text-white rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
