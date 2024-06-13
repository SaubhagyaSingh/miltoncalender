import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 p-16 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div>
          <h5 className="text-[24px] font-bold mb-3">Products</h5>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-500 hover:underline">Features</a></li>
            <li><a href="#testimonials" className="text-gray-500 hover:underline">Testimonials</a></li>
            <li><a href="#pricing" className="text-gray-500 hover:underline">Pricing</a></li>
            <li><a href="#faq" className="text-gray-500 hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className=" text-[24px] font-bold mb-3">Resources</h5>
          <ul className="space-y-2">
            <li><a href="#changelog" className="text-gray-500 hover:underline">Change Log</a></li>
            <li><a href="#helpcenter" className="text-gray-500 hover:underline">Help Center</a></li>
            <li><a href="#blog" className="text-gray-500 hover:underline">Blog</a></li>
            <li><a href="#contact" className="text-gray-500 hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[24px] font-bold mb-3">Others</h5>
          <ul className="space-y-2">
            <li><a href="#privacy" className="text-gray-500 hover:underline">Privacy</a></li>
            <li><a href="#terms" className="text-gray-500 hover:underline">Terms</a></li>
            <li><a href="#affiliation" className="text-gray-500 hover:underline">Affiliation</a></li>
            <li><a href="#press" className="text-gray-500 hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[24px] font-bold mb-3">From the Blog Category</h5>
          <ul className="space-y-2">
            <li><a href="#topic1" className="text-gray-500 hover:underline">How to Optimize Your Workday</a></li>
            <li><a href="#topic2" className="text-gray-500 hover:underline">The Future of Remote Work</a></li>
            <li><a href="#topic3" className="text-gray-500 hover:underline">Top 10 Productivity Tools</a></li>
            <li><a href="#topic4" className="text-gray-500 hover:underline">Effective Team Communication Tips</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
