import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-blue-700">LOGO</div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Dropdown label="Fssai & Eating License">
            <DropdownItem label="FSSAI License" />
            <DropdownItem label="FSSAI License Renewal" />
            <DropdownItem label="FSSAI State License" />
            <DropdownItem label="Eating House License" />
            <DropdownItem label="Central FSSAI License" />
            <DropdownItem label="FSSAI Annual Return" />
            <DropdownItem label="FSSAI Product Approval" />
            <DropdownItem label="Food Recycling License" />
            <DropdownItem label="FPO Mark Certification" />
          </Dropdown>
          <Dropdown label="Business Registration" />
          <Dropdown label="IT Services" />
          <Dropdown label="Government Licenses" />
          {/* Add other dropdowns similarly */}
        </nav>
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

const Dropdown = ({ label, children }) => {
  return (
    <div className="relative group">
      <button className="hover:text-blue-600">{label}</button>
      {children && (
        <div className="absolute top-full left-0 bg-white shadow-lg p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition duration-200 ease-in-out z-50">
          <ul className="space-y-1">{children}</ul>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ label }) => {
  return (
    <li>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
        {label}
      </a>
    </li>
  );
};

export default Header;
