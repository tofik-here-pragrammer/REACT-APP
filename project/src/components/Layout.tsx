import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { School, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <School className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">CLC Portal</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apply">Apply for CLC</NavLink>
              <NavLink to="/track">Track Application</NavLink>
              <NavLink to="/verify">Verify CLC</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apply">Apply for CLC</NavLink>
              <NavLink to="/track">Track Application</NavLink>
              <NavLink to="/verify">Verify CLC</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center">
                <School className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">CLC Portal</span>
              </div>
              <p className="mt-4 text-gray-600">Making certificate management easier for students and institutions.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link to="/apply" className="text-gray-600 hover:text-gray-900">Apply for CLC</Link></li>
                <li><Link to="/track" className="text-gray-600 hover:text-gray-900">Track Application</Link></li>
                <li><Link to="/verify" className="text-gray-600 hover:text-gray-900">Verify CLC</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +91-XXXXXXXXXX
                </li>
                <li>
                  <a href="mailto:support@clcportal.com" className="text-gray-600 hover:text-gray-900">
                    support@clcportal.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-gray-400">&copy; 2025 CLC Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}