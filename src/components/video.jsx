export function VideoPitchSection() {
  const section = {
    backgroundColor: "#FFFF",
    padding: "80px 40px",
    textAlign: "center",
  };

  const subtitle = {
    fontSize: "20px",
    color: "#111827",
    marginBottom: "8px",
    fontFamily: "'Work Sans', sans-serif",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "40px",
    fontFamily: "'Work Sans', sans-serif",
  };

  const videoWrapper = {
    backgroundColor: "#f9fafb",
    borderRadius: "20px",
    maxHeight: "100px",
    maxWidth: "960px",
    margin: "0 auto",
    overflow: "hidden",
    position: "relative",
    paddingTop: "30.25%",
  };

  const iframe = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  };

  return (
    <section style={section}>
      <div style={subtitle}>Como usar?</div>
      <h2 style={title}>Veja nosso Vídeo Pitch</h2>
      <div style={videoWrapper}>
        <iframe
          style={iframe}
          src="https://www.youtube.com/embed/J2uJ6NRRego"
          title="Vídeo Pitch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

