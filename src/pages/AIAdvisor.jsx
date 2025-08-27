import React, { useState } from "react";
import { PageMetadata } from "../components/PageMetadata";
import { Send, Smile } from "lucide-react";

const AIAdvisor = () => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hi there! 👋 I'm your AI Buddy! I'm here to help you with anything about careers, learning, or just to chat! What would you like to know today? 🌟",
      timestamp: "Just now",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickSuggestions = [
    "What careers match my interests? 🎯",
    "How to improve my skills? 📚",
    "Tell me about science careers 🔬",
    "What's trending in tech? 💻",
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      content: newMessage,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai",
        content:
          "That's a great question! 😊 I'm here to help you learn and grow. Keep exploring and asking questions! 🌟",
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickSuggestion = (suggestion) => {
    setNewMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <PageMetadata
        title="AI Advisor | SkillSeed"
        description="Chat with your AI learning companion for personalized career and educational guidance"
      />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <section
            id="chat-hero"
            className="relative bg-gradient-to-br from-[#1A73E8]/10 via-[#FFC107]/10 to-[#FF4081]/10 rounded-3xl p-8 mb-8 overflow-hidden h-[300px] flex items-center"
          >
            {/* Floating Bubbles */}
            <div className="absolute top-4 right-8 w-16 h-16 bg-[#FFC107]/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-12 w-12 h-12 bg-[#1A73E8]/20 rounded-full animate-bounce"></div>
            <div
              className="absolute top-12 left-1/3 w-8 h-8 bg-[#FF4081]/20 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute bottom-4 right-1/4 w-10 h-10 bg-[#4CAF50]/20 rounded-full animate-pulse"
              style={{ animationDelay: "0.7s" }}
            ></div>
            <div
              className="absolute top-20 right-1/3 w-6 h-6 bg-[#9C27B0]/20 rounded-full animate-bounce"
              style={{ animationDelay: "1.2s" }}
            ></div>

            <div className="text-center w-full z-10">
              <h1 className="text-4xl font-bold text-[#212121] mb-4">
                🤖 Chat with AI Buddy! 🌟
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Ask me anything about careers, learning, or just say hi!
              </p>
              <div className="flex justify-center">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  alt="Emma"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Chat Interface */}
          <section id="chat-interface" className="mb-8">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden max-w-4xl mx-auto">
              {/* Chat Header */}
              <div
                id="chat-header"
                className="bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] p-6 text-white relative overflow-hidden"
              >
                <div className="absolute top-2 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-8 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                      🤖
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#4CAF50] rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI Buddy</h3>
                    <p className="text-white/80 text-sm">
                      Online • Ready to help! 🌟
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                id="chat-messages"
                className="h-[400px] overflow-y-auto p-6 space-y-4"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      message.type === "user" ? "justify-end" : ""
                    }`}
                  >
                    {message.type === "ai" && (
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1A73E8] to-[#4CAF50] rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                        🤖
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-4 max-w-sm ${
                        message.type === "ai"
                          ? "bg-[#F5F7FA] rounded-tl-md"
                          : "bg-[#1A73E8] text-white rounded-tr-md"
                      }`}
                    >
                      <p
                        className={
                          message.type === "ai"
                            ? "text-[#212121]"
                            : "text-white"
                        }
                      >
                        {message.content}
                      </p>
                      <span
                        className={`text-xs mt-2 block ${
                          message.type === "ai"
                            ? "text-gray-500"
                            : "text-white/70"
                        }`}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                    {message.type === "user" && (
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                        alt="Emma"
                        className="w-10 h-10 rounded-full flex-shrink-0"
                      />
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1A73E8] to-[#4CAF50] rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                      🤖
                    </div>
                    <div className="bg-[#F5F7FA] rounded-2xl rounded-tl-md p-4">
                      <div className="flex space-x-1">
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
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Suggestions */}
              <div
                id="quick-suggestions"
                className="px-6 py-4 border-t border-gray-100"
              >
                <p className="text-sm text-gray-600 mb-3">
                  💡 Quick questions you can ask:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickSuggestion(suggestion)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        index === 0
                          ? "bg-[#FFC107]/20 text-[#212121] hover:bg-[#FFC107]/30"
                          : index === 1
                          ? "bg-[#4CAF50]/20 text-[#212121] hover:bg-[#4CAF50]/30"
                          : index === 2
                          ? "bg-[#FF4081]/20 text-[#212121] hover:bg-[#FF4081]/30"
                          : "bg-[#9C27B0]/20 text-[#212121] hover:bg-[#9C27B0]/30"
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div id="chat-input" className="p-6 border-t border-gray-100">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Type your message here... 💬"
                      className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center hover:bg-[#FFB300] transition-colors">
                      <Smile className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    className="bg-[#1A73E8] text-white px-6 py-3 rounded-full hover:bg-[#1557b0] transition-colors flex items-center gap-2"
                  >
                    <span>Send</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Motivational Cards */}
          <section id="motivational-cards" className="mb-8">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 text-center">
              🌟 Daily Motivation 🌟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#FFC107]/10 to-[#FFC107]/5 rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#FFC107]/20 rounded-full animate-pulse"></div>
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-[#212121] mb-2">Dream Big!</h3>
                <p className="text-sm text-gray-600">
                  Every expert was once a beginner. Keep learning and growing!
                  🌱
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#4CAF50]/20 rounded-full animate-pulse"></div>
                <div className="text-4xl mb-3">💪</div>
                <h3 className="font-bold text-[#212121] mb-2">Stay Curious!</h3>
                <p className="text-sm text-gray-600">
                  Ask questions, explore new things, and never stop wondering!
                  ✨
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FF4081]/10 to-[#FF4081]/5 rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#FF4081]/20 rounded-full animate-pulse"></div>
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-[#212121] mb-2">
                  You're Amazing!
                </h3>
                <p className="text-sm text-gray-600">
                  Believe in yourself and all that you are capable of achieving!
                  🌟
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AIAdvisor;
