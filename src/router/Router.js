import React, { useState, useEffect } from 'react';

export const Router = ({ children }) => {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return React.Children.map(children, child => {
    if (!child || !child.props) return null;
    
    if (child.props.path === route || (child.props.path === '/' && route === '')) {
      return child;
    }
    if (child.props.path && child.props.path.includes(':id')) {
      const basePath = child.props.path.split(':')[0];
      if (route.startsWith(basePath)) {
        return React.cloneElement(child, { params: { id: route.split('/').pop() } });
      }
    }
    return null;
  });
};

export const Route = ({ children }) => children;

export const Link = ({ to, children, className }) => (
  <a 
    href={`#${to}`} 
    className={className}
    onClick={(e) => {
      e.preventDefault();
      window.location.hash = to;
    }}
  >
    {children}
  </a>
);