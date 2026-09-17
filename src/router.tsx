import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

// Detect base path for GitHub Pages deployment
// e.g., "/portofolio-maghfirah" when deployed to github.io/portofolio-maghfirah/
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

function getCleanPath(): string {
  const rawPath = window.location.pathname;
  // Strip the base path prefix so routing always works with clean paths like /projects/simtan
  if (BASE_PATH && rawPath.startsWith(BASE_PATH)) {
    const clean = rawPath.slice(BASE_PATH.length) || '/';
    return clean.startsWith('/') ? clean : '/' + clean;
  }
  return rawPath;
}

const RouterContext = createContext<RouterContextType>({
  path: getCleanPath(),
  navigate: () => {}
});

export const useRouter = () => useContext(RouterContext);

export const BrowserRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(getCleanPath);

  useEffect(() => {
    const handlePopState = () => {
      setPath(getCleanPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    // Build the full URL using the base path
    const fullPath = BASE_PATH + (to.startsWith('/') ? to : '/' + to);
    if (fullPath === window.location.pathname) return;
    window.history.pushState({}, '', fullPath);
    setPath(to.startsWith('/') ? to : '/' + to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}> = ({ to, children, className, onClick, 'aria-label': ariaLabel }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  // href uses full path with base for correct anchor href attribute
  const href = BASE_PATH + (to.startsWith('/') ? to : '/' + to);

  return (
    <a href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
};
