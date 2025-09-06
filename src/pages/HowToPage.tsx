function HowToPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        padding: "1rem",
        gap: "2rem",
      }}
    >
      <div style={{ flex: 1, textAlign: "left" }}>
        <h3>How to Use Blind Cube Trainer</h3>
        <div
          style={{
            background: "white",
            border: "1px solid grey",
            borderRadius: "1rem",
            padding: "0 0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <p style={{ margin: "0.5rem" }}>
            {
              "Welcome! This app is designed to help you practice blindfold solving with the "
            }
            <a
              href="https://cuberoot.me/wp-content/uploads/2019/02/502-3BLD-OP.pdf"
              target="_blank"
            >
              Old Pochmann Method
            </a>
            .
            <ul style={{ margin: 0 }}>
              <li>
                For edges, the buffer is UR. We handle swaps with UL using a
                T-perm.
              </li>
              <li>For corners, the buffer is UBL. We handle swaps with BFR.</li>
            </ul>
            <b>
              The app validates your blindfold solutions so you can focus on
              memorization and execution.
            </b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            position: "relative",
            gap: "4rem",
            justifyContent: "center",
          }}
        >
          <img
            src="/edge.png"
            alt="Edge"
            style={{
              maxWidth: "100%",
              maxHeight: "30vh",
              borderRadius: "12px",
              border: "2px solid #ccc",
            }}
          />
          <img
            src="/corner.png"
            alt="Corner"
            style={{
              maxWidth: "100%",
              maxHeight: "30vh",
              borderRadius: "12px",
              border: "2px solid #ccc",
            }}
          />
        </div>
        <div
          style={{
            background: "white",
            border: "1px solid grey",
            borderRadius: "1rem",
            padding: "0 0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <p style={{ marginBottom: "0" }}>Here’s how it works:</p>
          <ol style={{ marginTop: "0" }}>
            <li>
              <strong>Scramble:</strong> Set a scramble for practice.
            </li>
            <li>
              <strong>Orientation:</strong> Adjust orientation controls if
              needed (your solution will follow this orientation).
            </li>
            <li>
              <strong>Enter Solution:</strong> Type in your solution attempt.
            </li>
            <li>
              <strong>Cubes:</strong> Compare the scramble (left cube) and your
              solution applied (right cube).
            </li>
            <li>
              <strong>Current Solution:</strong> Review your edge & corner
              sequences.
            </li>
          </ol>
        </div>
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        <img
          src="/screenshot_with_numbers.png"
          alt="App screenshot"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            borderRadius: "12px",
            border: "2px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}

export default HowToPage;
