import { useState } from "react";
import isteLogo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(203, 213, 225, 0.3)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100px",
          padding: "0 2.5rem",
        }}
      >
        {/* Logo with heading */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(145deg, #3b82f6, #1e40af)",
              boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
              overflow: "hidden",
            }}
          >
            <img 
              src={isteLogo} 
              alt="ISTE Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ 
              fontSize: "1.8rem", 
              fontWeight: 800, 
              letterSpacing: "0.5px",
              background: "linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              lineHeight: 1.2
            }}>
              BVP-ISTE
            </h1>
            <p style={{
              fontSize: "0.95rem",
              color: "#64748b",
              fontWeight: 500,
              margin: 0,
              letterSpacing: "0.3px"
            }}>
              Indian Society for Technical Education
            </p>
          </div>
        </div>

        {/* Desktop Navigation - Text Links Only */}
        <nav 
          style={{ 
            display: "flex", 
            gap: "3rem", 
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link, index) => (
            <div 
              key={link.name}
              style={{
                position: "relative",
                padding: "0.5rem 0"
              }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                href={link.href}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: hoveredLink === index ? "#1e40af" : "#334155",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                  letterSpacing: "0.5px"
                }}
              >
                {link.name}
                {hoveredLink === index && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                      borderRadius: "3px",
                      animation: "underlineGrow 0.3s ease forwards",
                    }}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button - Only shows on mobile */}
        <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            borderRadius: "8px",
          }}
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={28} color="#3b82f6" />
          ) : (
            <Menu size={28} color="#3b82f6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "100px",
            left: 0,
            right: 0,
            background: "white",
            zIndex: 999,
            padding: "1.5rem 2.5rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            animation: "fadeIn 0.2s ease-out",
          }}
          className="md:hidden"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#1e293b",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(203, 213, 225, 0.5)",
                  transition: "all 0.2s ease",
                  ":hover": {
                    color: "#3b82f6",
                  }
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes underlineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

// These would be your imports (kept for reference)
const Menu = ({ size, color }) => <div />;
const X = ({ size, color }) => <div />;

export default Header;