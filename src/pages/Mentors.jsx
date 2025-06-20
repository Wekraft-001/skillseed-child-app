import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { FAIcon } from "../components/ui/font-awesome-icons";

const Mentors = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Meet Our Mentors</h1>
        <button variant="outline" className="gap-2">
          <FAIcon icon="filter" />
          Filter Mentors
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mentor Card 1 */}
        <Card className="overflow-hidden border-2 border-blue-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-44 relative overflow-hidden">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4e942b5c97-c55327070a29d8fcf875.png"
              alt="friendly teacher avatar with colorful background, cartoon style, warm and approachable"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <FAIcon icon="crown" className="text-white" />
              Top Rated
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-xl">Mr. Alex</CardTitle>
              <div className="flex items-center">
                <div className="text-yellow-500 mr-1">⭐</div>
                <span className="font-medium">4.9</span>
              </div>
            </div>
            <CardDescription>Space Science Expert</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                Science
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs">
                Robotics
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                English
              </span>
            </div>
            <p className="text-sm line-clamp-2">
              I love making space science fun and accessible for young minds!
              Let's explore the cosmos together!
            </p>
          </CardContent>
          <CardFooter className="pt-2">
            <button variant="default" className="w-full" asChild>
              <Link to="/mentor-detail/1">View Profile</Link>
            </button>
          </CardFooter>
        </Card>

        {/* Mentor Card 2 */}
        <Card className="overflow-hidden border-2 border-green-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-44 relative overflow-hidden">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/584c68d2ed-b3a7f2df59032190c953.png"
              alt="friendly female teacher with glasses and colorful background, cartoon style, enthusiastic expression"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <FAIcon icon="bolt" className="text-white" />
              New Mentor
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-xl">Ms. Sarah</CardTitle>
              <div className="flex items-center">
                <div className="text-yellow-500 mr-1">⭐</div>
                <span className="font-medium">4.8</span>
              </div>
            </div>
            <CardDescription>Creative Arts & Music</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full text-xs">
                Art
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-xs">
                Music
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                Drama
              </span>
            </div>
            <p className="text-sm line-clamp-2">
              I believe everyone is creative! Let's discover your artistic
              talents together in fun ways!
            </p>
          </CardContent>
          <CardFooter className="pt-2">
            <button
              variant="default"
              className="w-full bg-green-600 hover:bg-green-700"
              asChild
            >
              <Link to="/mentor-detail/2">View Profile</Link>
            </button>
          </CardFooter>
        </Card>

        {/* Mentor Card 3 */}
        <Card className="overflow-hidden border-2 border-amber-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-44 relative overflow-hidden">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e0d9f2f83a-23a48da3b5ed02b88983.png"
              alt="young male teacher with casual style and friendly smile, cartoon style with colorful background"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-xl">Mr. Jason</CardTitle>
              <div className="flex items-center">
                <div className="text-yellow-500 mr-1">⭐</div>
                <span className="font-medium">4.7</span>
              </div>
            </div>
            <CardDescription>Coding & Game Design</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                Coding
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs">
                Games
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                Math
              </span>
            </div>
            <p className="text-sm line-clamp-2">
              Ready to build your own video game? I'll teach you the skills to
              turn your ideas into playable games!
            </p>
          </CardContent>
          <CardFooter className="pt-2">
            <button
              variant="default"
              className="w-full bg-amber-600 hover:bg-amber-700"
              asChild
            >
              <Link to="/mentor-detail/3">View Profile</Link>
            </button>
          </CardFooter>
        </Card>

        {/* Mentor Card 4 */}
        <Card className="overflow-hidden border-2 border-purple-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-44 relative overflow-hidden">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2da10c4b2b-e4eb736f1854e74a176a.png"
              alt="friendly female teacher with pet animal, cartoon style, outdoors setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <FAIcon icon="paw" className="text-white" />
              Animal Expert
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-xl">Ms. Emma</CardTitle>
              <div className="flex items-center">
                <div className="text-yellow-500 mr-1">⭐</div>
                <span className="font-medium">4.9</span>
              </div>
            </div>
            <CardDescription>Nature & Animal Science</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                Biology
              </span>
              <span className="bg-brown-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                Animals
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs">
                Environment
              </span>
            </div>
            <p className="text-sm line-clamp-2">
              Let's explore the amazing world of animals and nature together
              with fun activities!
            </p>
          </CardContent>
          <CardFooter className="pt-2">
            <button
              variant="default"
              className="w-full bg-purple-600 hover:bg-purple-700"
              asChild
            >
              <Link to="/mentor-detail/4">View Profile</Link>
            </button>
          </CardFooter>
        </Card>

        {/* Add more mentor cards as needed */}
      </div>
    </div>
  );
};

export default Mentors;
