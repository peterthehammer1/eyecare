"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "Ophthalmologist",
    clinic: "Vision Care Associates",
    image: "/avatars/sarah-chen.jpg",
    content: "This platform has revolutionized our practice. The AI predictions for disease progression have helped us catch conditions earlier, and our optical capture rate increased by 30% in just 3 months.",
    rating: 5
  },
  {
    name: "Dr. Michael Rodriguez",
    title: "Optometrist",
    clinic: "Clear Vision Clinic",
    image: "/avatars/michael-rodriguez.jpg",
    content: "The voice AI integration is incredible. Patients love being able to call and book appointments naturally. It's like having a knowledgeable staff member available 24/7.",
    rating: 5
  },
  {
    name: "Jennifer Walsh",
    title: "Practice Manager",
    clinic: "Advanced Eye Care",
    image: "/avatars/jennifer-walsh.jpg",
    content: "Our administrative efficiency improved by 70%. The smart scheduling and insurance optimization features alone have paid for the platform multiple times over.",
    rating: 5
  },
  {
    name: "Dr. David Kim",
    title: "Ophthalmologist",
    clinic: "Retina Specialists Group",
    image: "/avatars/david-kim.jpg",
    content: "The diagnostic integration is seamless. OCT scans are automatically analyzed, and the AI alerts us to potential issues we might have missed. It's like having a second opinion on every case.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    title: "Optical Manager",
    clinic: "Family Vision Center",
    image: "/avatars/lisa-thompson.jpg",
    content: "The frame selection AI is amazing. Patients are happier with their choices, and we've seen a 40% reduction in remakes. The revenue impact has been incredible.",
    rating: 5
  },
  {
    name: "Dr. Robert Johnson",
    title: "Optometrist",
    clinic: "Community Eye Care",
    image: "/avatars/robert-johnson.jpg",
    content: "The predictive analytics help us optimize our schedule and reduce no-shows. We're seeing more patients and providing better care. This is the future of eyecare management.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Leading Eyecare Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how eyecare professionals across North America are transforming their practices with our AI platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title} at {testimonial.clinic}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 500+ Eyecare Practices
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to transform your practice with AI-powered eyecare management?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">30%</div>
                <div className="text-sm text-gray-500">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">70%</div>
                <div className="text-sm text-gray-500">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
