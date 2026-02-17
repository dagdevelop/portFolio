import { Text, Container, Img } from "@react-email/components";
import { convertImageToDataURI } from "@/utils/utils";

const Signature = () => {
  return (
    <Container
      style={{
        marginTop: "20px",
        paddingTop: "10px",
      }}
    >
      <Text>Cordialement,</Text>

      <Container style={{ fontSize: "12px", borderTop: "1px solid #ccc" }}>
        <Text>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            <li style={{ marginBottom: "5px" }}>
              <Img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/o-resto-908c4.appspot.com/o/logos%2FviallyLogo1.png?alt=media&token=a612c21d-a673-4221-ab68-d5977a10c15b"
                }
                alt="Logo"
                style={{
                  width: "100px",
                  height: "auto",
                  marginRight: "10px",
                }}
              />
            </li>
            <li style={{ marginBottom: "5px" }}>5000 Namur</li>

            <li style={{ marginBottom: "5px" }}>
              <a href="tel:+32492473290">+32 492 47 32 90</a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <a href="mailto:v.dag@viallydaggroup.com">
                v.dag@viallydaggroup.com
              </a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <a href="https://www.viallydag.com/portfolio">
                www.viallydag.com/portfolio
              </a>
            </li>
          </ul>
        </Text>
      </Container>
    </Container>
  );
};

export default Signature;
