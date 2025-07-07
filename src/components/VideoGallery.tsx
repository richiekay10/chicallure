
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Play } from "lucide-react";

const VideoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("food");

  const categories = [
    { id: "food", name: "Food Videos", color: "text-orange-600 dark:text-orange-400" },
    { id: "fashion", name: "Fashion Videos", color: "text-pink-600 dark:text-pink-400" },
    { id: "footwear", name: "Footwear Videos", color: "text-purple-600 dark:text-purple-400" }
  ];

  // Placeholder for videos - in a real app, this would come from a backend
  const videos = {
    food: [
      { id: 1, title: "Making Egusi Soup", thumbnail: "/api/placeholder/300/200" },
      { id: 2, title: "Okro Soup Recipe", thumbnail: "/api/placeholder/300/200" }
    ],
    fashion: [
      { id: 3, title: "Summer Dress Collection", thumbnail: "/api/placeholder/300/200" },
      { id: 4, title: "Styling Tips", thumbnail: "/api/placeholder/300/200" }
    ],
    footwear: [
      { id: 5, title: "Sneaker Showcase", thumbnail: "/api/placeholder/300/200" },
      { id: 6, title: "Comfort Slippers", thumbnail: "/api/placeholder/300/200" }
    ]
  };

  const handleVideoUpload = (category: string) => {
    // This would handle video upload in a real application
    console.log(`Uploading video for ${category}`);
    alert(`Video upload feature for ${category} will be implemented with backend integration`);
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          🎥 Video Gallery
        </h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className={`${activeCategory === category.id ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' : category.color}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="text-center mb-8">
          <Card className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Upload Videos - {categories.find(c => c.id === activeCategory)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleVideoUpload(activeCategory)}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Video
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos[activeCategory as keyof typeof videos].map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80">
              <CardContent className="p-4">
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Video Preview</p>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{video.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            Video gallery is ready for content! Upload your product videos to showcase your amazing food, fashion, and footwear collections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
