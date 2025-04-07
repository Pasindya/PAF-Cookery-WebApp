import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import { FiUpload, FiClock, FiBookOpen, FiX } from 'react-icons/fi';
import { GiCookingPot, GiChefToque } from 'react-icons/gi';

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    recipeImage: null,
    description: '',
    preparation_time: '',
    cuisine_type: ''
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      
      setRecipe(prev => ({
        ...prev,
        recipeImage: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Recipe submitted:', recipe);
      setRecipe({
        title: '',
        recipeImage: null,
        description: '',
        preparation_time: '',
        cuisine_type: ''
      });
      setPreviewImage(null);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with decorative elements */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-white"></div>
              <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center space-x-4 mb-4">
                <GiCookingPot className="text-3xl text-white opacity-80" />
                <GiChefToque className="text-3xl text-white opacity-80" />
              </div>
              <h1 className="text-3xl font-bold text-white font-serif tracking-tight">Share Your Culinary Creation</h1>
              <p className="text-blue-100 mt-3 max-w-lg mx-auto">Contribute to our community of food enthusiasts</p>
            </div>
          </div>
          
          <div className="p-8">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Recipe submitted successfully! Your dish is now part of our collection.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Recipe Title <span className="text-blue-600">*</span>
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                    <FiBookOpen className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={recipe.title}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="e.g., Creamy Garlic Parmesan Pasta"
                    required
                  />
                </div>
              </div>
              
              {/* Image Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Recipe Image
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex flex-col items-center justify-center px-6 py-8 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors w-full sm:max-w-xs">
                    <FiUpload className="h-8 w-8 text-blue-400 mb-2" />
                    <span className="text-sm font-medium text-blue-700">Upload Image</span>
                    <span className="text-xs text-blue-500 mt-1">JPEG, PNG (max 5MB)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {previewImage && (
                    <div className="flex-1">
                      <div className="relative group">
                        <div className="w-full h-40 rounded-lg overflow-hidden border border-blue-200">
                          <img 
                            src={previewImage} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button 
                          type="button"
                          onClick={() => {
                            setPreviewImage(null);
                            setRecipe(prev => ({...prev, recipeImage: null}));
                          }}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:bg-blue-50 text-blue-500"
                        >
                          <FiX className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Recipe Description <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={recipe.description}
                  onChange={handleChange}
                  rows={5}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 border border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="Describe your recipe, ingredients, and cooking process..."
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preparation Time */}
                <div className="space-y-2">
                  <label htmlFor="preparation_time" className="block text-sm font-medium text-gray-700">
                    Preparation Time (minutes) <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                      <FiClock className="h-5 w-5" />
                    </div>
                    <input
                      type="number"
                      id="preparation_time"
                      name="preparation_time"
                      value={recipe.preparation_time}
                      onChange={handleChange}
                      min="1"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      required
                    />
                  </div>
                </div>
                
                {/* Cuisine Type */}
                <div className="space-y-2">
                  <label htmlFor="cuisine_type" className="block text-sm font-medium text-gray-700">
                    Cuisine Type <span className="text-blue-600">*</span>
                  </label>
                  <select
                    id="cuisine_type"
                    name="cuisine_type"
                    value={recipe.cuisine_type}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                    required
                  >
                    <option value="">Select a cuisine</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="American">American</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Japanese">Japanese</option>
                    <option value="French">French</option>
                    <option value="Thai">Thai</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-blue-300'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Share Your Recipe"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddRecipe;