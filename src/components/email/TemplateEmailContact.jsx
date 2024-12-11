import { Html, Heading, Text, Body, Container } from "@react-email/components";
import Signature from "./Signature";
const TemplateEmailContact = ({ datas }) => {
  return (
    <Html lang="en">
      <Body style={{ padding: "20px" }}>
        <Heading as="h1">
          {" "}
          {datas?.firstname} {datas?.lastname} souhaiterai échanger avec vous
          par rapport au poste : {datas?.service}{" "}
        </Heading>
        <Text>{datas?.message}</Text>

        <Container style={{ padding: "1rem" }}>
          <Text>
            <ul>
              <li>
                Nom: {datas?.firstname} {datas?.lastname}
              </li>
              <li>Email: {datas?.email}</li>
              <li>Phone: {datas?.phone}</li>
              <li>Service: {datas?.service}</li>
            </ul>
          </Text>
        </Container>

        <Signature />
      </Body>
    </Html>
  );
};
export default TemplateEmailContact;
