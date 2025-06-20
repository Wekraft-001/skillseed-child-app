import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  FontAwesomeAward,
  FontAwesomeCalculator,
  FontAwesomeChartLine,
  FontAwesomeClock,
  FontAwesomeMicroscope,
  FontAwesomeTasks,
} from "../components/ui/font-awesome-icons";

const Activities = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Fun Learning Activities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Activity 1 */}
        <Card className="overflow-hidden border-2 border-blue-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-48 overflow-hidden">
            <img
              src="/images/activities/space-explorer.jpg"
              alt="Colorful planets and space elements with stars"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target;
                target.onerror = null;
                target.src =
                  "https://placehold.co/400x200/1e40af/ffffff?text=Space+Explorer";
              }}
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                10-15 min
              </div>
              <FontAwesomeTasks className="text-blue-500" />
            </div>
            <CardTitle className="text-xl">Space Explorer Challenge</CardTitle>
            <CardDescription>Build your astronomy knowledge!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Take a journey through our solar system and beyond! Learn about
            planets, stars, and galaxies.
          </CardContent>
          <CardFooter className="pt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</div>
              <span className="text-xs text-gray-500">(124)</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-blue-600 p-3 rounded-3xl text-white font-medium">
                  Start
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Space Explorer Challenge</DialogTitle>
                  <DialogDescription>
                    Get ready for an exciting adventure through space!
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p>This activity will help you learn about:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The planets in our solar system</li>
                    <li>Different types of stars</li>
                    <li>Amazing space phenomena</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      You'll earn a Space Explorer badge upon completion!
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <button>Cancel</button>
                  <button>Begin Adventure</button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        {/* Activity 2 */}
        <Card className="overflow-hidden border-2 border-purple-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-48 overflow-hidden">
            <img
              src="/images/activities/coding-robot.jpg"
              alt="Kid-friendly coding interface with blocks and simple robot"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target;
                target.onerror = null;
                target.src =
                  "https://placehold.co/400x200/7e22ce/ffffff?text=Code+Your+Robot";
              }}
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                20-30 min
              </div>
              <FontAwesomeAward className="text-purple-500" />
            </div>
            <CardTitle className="text-xl">Code Your Robot</CardTitle>
            <CardDescription>Learn programming basics!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Program your virtual robot to navigate mazes and collect stars using
            block-based coding!
          </CardContent>
          <CardFooter className="pt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-1">⭐⭐⭐⭐</div>
              <span className="text-xs text-gray-500">(98)</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  variant="default"
                  className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 text-white font-medium"
                >
                  Start
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Code Your Robot</SheetTitle>
                  <SheetDescription>
                    Get ready to program your own virtual robot!
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-4">
                  <p>In this activity, you'll learn:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Basic programming concepts</li>
                    <li>Logical thinking and problem-solving</li>
                    <li>How to control a virtual robot</li>
                  </ul>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-700">
                      Complete all levels to earn your Coding Badge!
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <button
                      variant="default"
                      className="bg-purple-600 hover:bg-purple-700 w-full"
                    >
                      Start Coding
                    </button>
                    <button variant="outline" className="w-full">
                      Cancel
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </CardFooter>
        </Card>

        {/* Activity 3 */}
        <Card className="overflow-hidden border-2 border-green-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-48 overflow-hidden">
            <img
              src="/images/activities/dinosaur-explorer.jpg"
              alt="Colorful dinosaur exhibit with kid-friendly interactive elements"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target;
                target.onerror = null;
                target.src =
                  "https://placehold.co/400x200/16a34a/ffffff?text=Dinosaur+Time+Machine";
              }}
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                15-20 min
              </div>
              <FontAwesomeClock className="text-green-500" />
            </div>
            <CardTitle className="text-xl">Dinosaur Time Machine</CardTitle>
            <CardDescription>Travel back to prehistoric times!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Discover amazing dinosaurs that once roamed the Earth and learn
            about paleontology.
          </CardContent>
          <CardFooter className="pt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</div>
              <span className="text-xs text-gray-500">(156)</span>
            </div>
            <button
              variant="default"
              className="bg-green-600 hover:bg-green-700 rounded-full p-3 text-white font-medium"
            >
              Start
            </button>
          </CardFooter>
        </Card>

        {/* Activity 4 */}
        <Card className="overflow-hidden border-2 border-amber-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-48 overflow-hidden">
            <img
              src="/images/activities/math-adventure.jpg"
              alt="Interactive math game with friendly cartoon numbers and shapes"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target;
                target.onerror = null;
                target.src =
                  "https://placehold.co/400x200/d97706/ffffff?text=Math+Adventure";
              }}
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                10-15 min
              </div>
              <FontAwesomeChartLine className="text-amber-500" />
            </div>
            <CardTitle className="text-xl">Math Adventure</CardTitle>
            <CardDescription>Make math fun and exciting!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Solve puzzles, play games, and discover how math is used in everyday
            life.
          </CardContent>
          <CardFooter className="pt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-1">⭐⭐⭐⭐</div>
              <span className="text-xs text-gray-500">(112)</span>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 rounded-full p-3 text-white font-medium">
              Start
            </button>
          </CardFooter>
        </Card>

        {/* Activity 5 */}
        <Card className="overflow-hidden border-2 border-pink-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-48 overflow-hidden">
            <img
              src="/images/activities/science-lab.jpg"
              alt="Science experiment with bubbling beakers and colorful liquids"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target;
                target.onerror = null;
                target.src =
                  "https://placehold.co/400x200/0284c7/ffffff?text=Science+Lab";
              }}
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                15-25 min
              </div>
              <FontAwesomeCalculator className="text-pink-500" />
            </div>
            <CardTitle className="text-xl">Digital Art Studio</CardTitle>
            <CardDescription>Express your creativity!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Learn digital art techniques and create amazing artwork using our
            virtual art tools.
          </CardContent>
          <CardFooter className="pt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</div>
              <span className="text-xs text-gray-500">(143)</span>
            </div>
            <button className="bg-pink-600 hover:bg-pink-700 rounded-full p-3 text-white font-medium">
              Start
            </button>
          </CardFooter>
        </Card>

        {/* Activity 6 */}
        <Card className="overflow-hidden border-2 border-cyan-100 shadow-md hover:shadow-lg transition-all">
          <div className="h-48 overflow-hidden">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fac6828383-fbe0cb12639544fa9808.png"
              alt="Interactive science lab with kid-friendly experiments and cartoon science equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">
                20-30 min
              </div>
              <FontAwesomeMicroscope className="text-cyan-500" />
            </div>
            <CardTitle className="text-xl">Science Explorers Lab</CardTitle>
            <CardDescription>Conduct awesome experiments!</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            Become a junior scientist and learn through fun virtual experiments
            and discoveries.
          </CardContent>
          <CardFooter className="pt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-1">⭐⭐⭐⭐</div>
              <span className="text-xs text-gray-500">(89)</span>
            </div>
            <button className="bg-cyan-600 hover:bg-cyan-700 rounded-full p-3 text-white font-medium">
              Start
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Activities;
