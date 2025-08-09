import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pixelcraftImage from "@/assets/pixelcraft.jpeg";
import sponsorImage from "@/assets/sponsorship.jpeg";
import softechImage from "@/assets/softech.jpeg";
import eventManagementImage from "@/assets/event-management.jpeg";
import contentCreationImage from "@/assets/content-creation.jpeg";
import sahityaImage from "@/assets/sahitya.jpeg";

const subchapters = [
  {
    title: "PIXELCRAFT",
    description: "PixelCraft serves as your creative blank canvas. For those interested in graphic design, wish to experiment and develop in the field of visuals.",
    image: pixelcraftImage,
    accentColor: "#3b82f6"
  },
  {
    title: "SPONSORSHIP",
    description: " Sponsorship Department is the driving force behind our events, forging strategic partnerships with industry leaders to secure the resources we need.",
    image: sponsorImage,
    accentColor: "#4f46e5"
  },
  {
    title: "SOFTECH",
    description: "Softech empowers students to explore the software side of technology, turning creative ideas into practical life and code to create legacy.",
    image: softechImage,
    accentColor: "#7c3aed"
  },
  {
    title: "EVENT MANAGEMENT",
    description: "The backbone of our success lies in our dedicated event management team, a dynamic force that transforms ideas into impactful experiences.",
    image: eventManagementImage,
    accentColor: "#1e3a8a"
  },
  {
    title: "CONTENT & CREATION",
    description: "The content team drives our digital presence through engaging content and communication strategy and it acts as a major tool.",
    image: contentCreationImage,
    accentColor: "#10b981"
  },
  {
    title: "SAHITYA",
    description: "Sahitya is for people who appreciate the craft of language. Literary endeavors and content writing are the focus of this subchapter.",
    image: sahityaImage,
    accentColor: "#2563eb"
  }
];

const SubchaptersSection = () => {
  return (
    <section style={{ 
      padding: "8rem 1.5rem", 
      backgroundColor: "#f8fafc",
      position: "relative"
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        zIndex: 0
      }}></div>

      <div style={{ 
        maxWidth: "1440px", 
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{ 
          textAlign: "center", 
          marginBottom: "6rem",
          padding: "0 1rem"
        }}>
          <h2 style={{ 
            fontSize: "3rem", 
            fontWeight: "800", 
            color: "#0f172a",
            marginBottom: "1.5rem",
            letterSpacing: "-0.05em",
            lineHeight: "1.2",
            fontFamily: "'Inter', sans-serif"
          }}>
            Our <span style={{ color: "#3b82f6" }}>Subchapters</span>
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "#475569", 
            maxWidth: "700px", 
            margin: "0 auto",
            lineHeight: "1.7",
            fontFamily: "'Inter', sans-serif"
          }}>
            Explore our diverse range of specialized subchapters, each focused on different aspects of technology and creativity
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2.5rem",
          alignItems: "stretch"
        }}>
          {subchapters.map((subchapter, index) => (
            <Card 
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#ffffff",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ 
                position: "relative",
                height: "260px",
                overflow: "hidden",
                flexShrink: 0
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent 60%, ${subchapter.accentColor}20)`,
                  zIndex: 1
                }}></div>
                <img 
                  src={subchapter.image} 
                  alt={subchapter.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    filter: "brightness(0.98)"
                  }}
                />
              </div>

              <CardContent style={{ 
                padding: "2rem",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  width: "48px",
                  height: "4px",
                  backgroundColor: subchapter.accentColor,
                  borderRadius: "2px",
                  marginBottom: "1.5rem"
                }}></div>
                
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                  paddingRight: "1rem" // Added to prevent text touching edge
                }}>
                  {subchapter.title}
                </h3>
                <p style={{
                  fontSize: "1.05rem",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  fontFamily: "'Inter', sans-serif",
                  flexGrow: 1,
                  paddingRight: "1rem" // Added to prevent text touching edge
                }}>
                  {subchapter.description}
                </p>
                
                <div style={{
                  alignSelf: "flex-start",
                  marginTop: "auto", // Pushes button to bottom
                  padding: "1rem 0" // Added vertical padding around button
                }}>
                  <Button 
                    variant="outline"
                    style={{
                      padding: "0.75rem 1.75rem", // Increased horizontal padding
                      borderColor: subchapter.accentColor,
                      color: subchapter.accentColor,
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.3s ease",
                      borderWidth: "1.5px",
                      fontSize: "0.95rem",
                      marginLeft: "0.5rem" // Added left margin
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = subchapter.accentColor + "15";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Explore More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubchaptersSection;