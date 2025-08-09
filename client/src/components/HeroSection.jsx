import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroTeamPhoto from "@/assets/hero-team-photo.jpg";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    statsRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      overflow: "hidden"
    }}>
      {/* Gradient background */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(239, 246, 255, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
          animation: "float 6s ease-in-out infinite alternate"
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(224, 231, 255, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
          animation: "float 8s ease-in-out infinite alternate",
          animationDelay: "1s"
        }} />
      </div>

      {/* Grid lines decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.1,
        backgroundImage: `
          linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px"
      }} />

      <div style={{
        width: "100%",
        maxWidth: "1400px", // Increased max width
        margin: "0 auto",
        position: "relative",
        zIndex: 10,
        padding: "4rem 2rem" // Increased padding
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr", // Changed to side-by-side layout
          gap: "4rem",
          alignItems: "center"
        }}>
          {/* Content - Enlarged and more prominent */}
          <div ref={contentRef} style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}>
            <div style={{ marginBottom: "2rem" }}> {/* Increased margin */}
              <span style={{
                display: "inline-block",
                padding: "0.5rem 1rem", // Larger padding
                fontSize: "0.875rem", // Slightly larger
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#2563eb",
                backgroundColor: "rgba(239, 246, 255, 0.8)",
                borderRadius: "9999px",
                marginBottom: "1.5rem" // Increased margin
              }}>
                ISTE Student Chapter
              </span>
              <h1 style={{
                fontSize: "4rem", // Much larger
                fontWeight: "bold",
                lineHeight: 1.1, // Tighter line height
                background: "linear-gradient(to right, #1e3a8a 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "1rem" // Adjusted margin
              }}>
                BVP-ISTE
              </h1>
              <h2 style={{
                fontSize: "1.5rem", // Larger
                fontWeight: 500,
                color: "#64748b",
                letterSpacing: "0.025em",
                marginBottom: "2rem" // Increased margin
              }}>
                Indian Society for Technical Education
              </h2>
            </div>

            <p style={{
              fontSize: "1.25rem", // Larger text
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: "3rem", // More spacing
              maxWidth: "90%" // Constrain width for better readability
            }}>
              Founded in 2011, the BVP ISTE Student Chapter at Bharati Vidyapeeth's 
              College of Engineering is a thriving hub for innovation and technical 
              excellence. With 300+ active members, we offer leadership, professional 
              growth, and hands-on learning opportunities.
            </p>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem", // Increased gap
              marginBottom: "4rem" // More spacing
            }}>
              <div style={{
                transition: "transform 0.2s ease"
              }}>
                <Button
                  size="lg"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "1rem 2rem", // Larger button
                    fontSize: "1.125rem", // Larger text
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <span style={{ position: "relative", zIndex: 10 }}>Join Our Community</span>
                  <span style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, #2563eb 0%, #1d4ed8 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }} />
                </Button>
              </div>
              
              <div style={{
                transition: "transform 0.2s ease"
              }}>
                <Button
                  variant="outline"
                  size="lg"
                  style={{
                    border: "1px solid #cbd5e1",
                    color: "#334155",
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    padding: "1rem 2rem", // Larger button
                    fontSize: "1.125rem", // Larger text
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem" // Increased gap between stats
            }}>
              {[
                { value: "300+", label: "Active Members" },
                { value: "2011", label: "Founded" },
                { value: "6", label: "Subchapters" },
              ].map((stat, index) => (
                <div
                  key={index}
                  ref={el => statsRefs.current[index] = el}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: `opacity 0.5s ease ${0.3 + index * 0.1}s, transform 0.5s ease ${0.3 + index * 0.1}s`
                  }}
                >
                  <span style={{
                    fontSize: "2.25rem", // Much larger stats
                    fontWeight: "bold",
                    color: "#2563eb"
                  }}>{stat.value}</span>
                  <span style={{ 
                    color: "#64748b",
                    fontSize: "1.125rem" // Larger label
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Always on the right side */}
          <div ref={imageRef} style={{
            position: "relative",
            opacity: 0,
            transform: "scale(0.95)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            height: "100%"
          }}>
            <Card style={{
              overflow: "hidden",
              border: "none",
              borderRadius: "20px", // Larger border radius
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)", // More prominent shadow
              transition: "transform 0.7s ease",
              height: "100%"
            }}>
              <img
                src={heroTeamPhoto}
                alt="BVP-ISTE Team Members"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.7s ease",
                  minHeight: "600px" // Ensure minimum height
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(15, 23, 42, 0.3) 0%, transparent 100%)"
              }} />
            </Card>
            
            {/* Decorative elements */}
            <div style={{
              position: "absolute",
              zIndex: -1,
              bottom: "-2rem",
              right: "-2rem",
              width: "10rem", // Larger
              height: "10rem", // Larger
              borderRadius: "50%",
              backgroundColor: "rgba(96, 165, 250, 0.1)",
              filter: "blur(20px)",
              animation: "float 6s ease-in-out infinite alternate",
              animationDelay: "0.5s"
            }} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;