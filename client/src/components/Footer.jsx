const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(59,130,246,0.9) 100%)",
        backdropFilter: "blur(10px)",
        color: "#dbeafe",
        padding: "3rem 1rem",
        borderTop: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 -4px 20px rgba(30,58,138,0.2)",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Column 1 - Organization Info */}
          <div>
            <h3 style={{ 
              fontSize: "1.75rem", 
              fontWeight: "800", 
              marginBottom: "1rem",
              color: "#ffffff",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)"
            }}>
              BVP-ISTE
            </h3>
            <p style={{ 
              fontSize: "1.1rem", 
              lineHeight: "1.6", 
              fontWeight: "500",
              color: "#dbeafe",
              opacity: "0.9"
            }}>
              Indian Society for Technical Education
            </p>
          </div>

          {/* Column 2 - Quick Links */}
<div>
  <h3 style={{ 
    fontSize: "1.5rem", 
    fontWeight: "700", 
    marginBottom: "1.5rem",
    color: "#ffffff",
    textShadow: "0 1px 3px rgba(0,0,0,0.1)"
  }}>
    Quick Links
  </h3>
  <ul style={{ 
    listStyle: "none", 
    padding: "0", 
    display: "flex", 
    flexDirection: "column", 
    gap: "1rem" 
  }}>
    {[
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
      { name: "Team", href: "/team" }
    ].map((item) => (
      <li key={item.name}>
        <a
          href={item.href}
          style={{
            fontSize: "1.1rem",
            color: "#dbeafe",
            textDecoration: "none",
            transition: "all 0.2s",
            display: "inline-block",
            fontWeight: "500"
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#93c5fd";
            e.target.style.transform = "translateX(4px)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#dbeafe";
            e.target.style.transform = "translateX(0)";
          }}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 style={{ 
              fontSize: "1.5rem", 
              fontWeight: "700", 
              marginBottom: "1.5rem",
              color: "#ffffff",
              textShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              Connect With Us
            </h3>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bvpiste/"
                aria-label="Instagram"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dbeafe"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dbeafe"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ 
          height: "1px", 
          background: "rgba(255,255,255,0.2)", 
          width: "100%",
          margin: "1rem 0"
        }}></div>

        {/* Bottom Row - Copyright */}
        <div
          style={{
            textAlign: "center",
            fontSize: "1.05rem",
            color: "#dbeafe",
            fontWeight: "500",
            opacity: "0.8"
          }}
        >
          © {new Date().getFullYear()} BVP-ISTE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;