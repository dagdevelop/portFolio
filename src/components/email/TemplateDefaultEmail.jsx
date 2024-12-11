import React from "react";
import { Html, Heading, Text, Body, Container, Img } from "@react-email/components";

import Signature from "./Signature";

export default function TemplateDefaultEmail({ datas }) {
  return (
    <Html lang="en">
      <Body style={{ padding: "1rem" }}>
        <Text>
          <Img
            src={"https://firebasestorage.googleapis.com/v0/b/o-resto-908c4.appspot.com/o/logos%2FviallyLogo1.png?alt=media&token=a612c21d-a673-4221-ab68-d5977a10c15b"}
            alt="Logo"
            style={{
              width: "100px",
              height: "auto",
              marginRight: "10px",
            }}
          />
        </Text>
        <Heading as="h1">{datas?.header}</Heading>

        <Container style={{ padding: "1rem" }}>
          <Text>{datas?.message}</Text>
          {datas?.other && (
            <Text>
              <ul>
                {datas?.other?.map((item, key) => {
                  return (
                    <li key={key}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "uppercase",
                        }}
                      >
                        {item.key}
                      </span>{" "}
                      : {item.value}
                    </li>
                  );
                })}
              </ul>
            </Text>
          )}
        </Container>

        <Signature />
      </Body>
    </Html>
  );
}
