import { Card, CardContent } from "@/components/ui/card";
import handsOnImage from "@/assets/handsonexp.jpg";
import connectionsImage from "@/assets/professional-connections.jpg";
import developImage from "@/assets/develop-yourself.jpg";
import memoriesImage from "@/assets/fun-memories.jpg";

const reasons = [
  {
    title: "Hands-On Experience",
    description: "Gain practical skills through real-world projects and workshops in cutting-edge technologies.",
    image: handsOnImage,
    accentColor: "#2563eb"
  },
  {
    title: "Professional Connections",
    description: "Build lasting relationships with industry professionals and like-minded peers.",
    image: connectionsImage,
    accentColor: "#3b82f6"
  },
  {
    title: "Develop Yourself",
    description: "Enhance your technical and leadership skills through challenging opportunities.",
    image: developImage,
    accentColor: "#7c3aed"
  },
  {
    title: "Create Fun Memories",
    description: "Be part of an amazing community and create unforgettable experiences together.",
    image: memoriesImage,
    accentColor: "#10b981"
  }
];

const WhyJoinSection = () => {
  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Modern background elements */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "-150px",
        left: "-150px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        zIndex: 0
      }}></div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}
      >
        <div style={{ 
          textAlign: "center", 
          marginBottom: "4rem",
          padding: "0 2rem" // Added horizontal padding
        }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "1.25rem",
              letterSpacing: "-0.025em",
              lineHeight: "1.2",
              fontFamily: "'Inter', sans-serif",
              padding: "0 1rem" // Ensure title doesn't touch edges
            }}
          >
            Why Join <span style={{ color: "#3b82f6" }}>Us?</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              padding: "0 1rem" // Ensure subtitle doesn't touch edges
            }}
          >
            Discover the incredible opportunities that await you as part of our thriving community
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: "2.5rem", // Increased gap between cards
            alignItems: "stretch"
          }}
        >
          {reasons.map((reason, index) => (
            <Card
              key={index}
              style={{
                border: "none",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "0 1rem" // Added horizontal margin to cards
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "240px",
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to bottom, transparent 60%, ${reason.accentColor}15)`,
                    zIndex: 1
                  }}
                ></div>
                <img
                  src={reason.image}
                  alt={reason.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    filter: "brightness(0.97)"
                  }}
                />
              </div>

              <CardContent style={{ 
                padding: "2rem 2.25rem", // Increased padding on all sides
                textAlign: "left",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                
                
              }}>
                <div style={{
                  width: "40px",
                  height: "4px",
                  backgroundColor: reason.accentColor,
                  borderRadius: "2px",
                  marginBottom: "1.5rem",
                  marginRight: "1.5rem"// Increased space below accent bar
                }}></div>
                
                <h3
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "1rem", // Increased space below title
                    lineHeight: "1.4", // Better line height
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.015em",
                    paddingRight: "1rem" // Ensure text doesn't touch right edge
                  }}
                >
                  {reason.title}
                </h3>

                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#475569",
                    lineHeight: "1.7",
                    marginBottom: "2rem", // Increased space above button
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "400",
                    flexGrow: 1,
                    paddingRight: "5rem" // Extra right padding
                  }}
                >
                  {reason.description}
                </p>

                <div style={{
                  alignSelf: "flex-start",
                  padding: "0.75rem 1.25rem", // Better button padding
                  backgroundColor: `${reason.accentColor}10`,
                  color: reason.accentColor,
                  borderRadius: "6px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif",
                  transition: "all 0.2s ease",
                  border: `1px solid ${reason.accentColor}20`,
                  marginTop: "auto" // Pushes button down if content is short
                }}>
                  Learn more →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;