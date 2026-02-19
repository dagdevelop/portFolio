"use client";
import React, { useState } from "react";
import "./Contact.scss";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MdEmail } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Title from "@/components/title/Title";
import { jobServices } from "@/utils/utils";
import { Textarea } from "@/components/ui/textarea";
import InfoItem from "@/components/info-item/InfoItem";
import { FaPhoneAlt } from "react-icons/fa";
import { common, warning } from "@/theme/palette";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendMail } from "@/action";

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmptyField()) {
      toast.error("Please fill in all fields", {
        description: "Fields with * are required",
      });
      return;
    }
    setLoading(true);
    sendMail({
      to: "v.dag@viallydaggroup.com",
      subject: "Nouvelle demande d'embauche",
      template: "email-contact",
      datas: {
        firstname,
        lastname,
        email,
        phone,
        service,
        message:
          message ||
          `Hello, nous recherchons présentement un profil en tant que 
        ${service} et votre profil semble interéssant ! veuillez nous 
        contacter le plus vite possible s'il vous plait !`,
      },
    })
      .then(() => {
        sendMail({
          to: email,
          subject: "Confirmation of Your Contact Request",
          template: "email-default",
          datas: {
            header: "Confirmation of Your Contact Request",
            message: `Dear ${firstname} ${lastname}, we have received your contact request. We will get back to you as soon as possible.`,
          },
        });

        setLoading(false);
        toast.success("Message sent successfully", {
          description: `Thank you M./Mr ${firstname} ${lastname}, I will contact you as soon as possible`,
          action: {
            label: "close",
            onClick: () => toast.dismiss(),
          },
          duration: 7000,
        });
        resetFields();
      })
      .catch((e) => {
        setLoading(false);
        toast.error("E-mail not sent", {
          description: "An error occurred while sending the message",
          action: {
            label: "close",
            onClick: () => toast.dismiss(),
          },
        });
        console.log("Email not sent ", e);
      });
  };

  const hasEmptyField = () => {
    return (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      service === ""
    );
  };

  const resetFields = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <div id="contact" className="contact">
      <div className="bloc-contact">
        <Title label="Contact" />
        <div className="container">
          <div className="form">
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle className="form-title text-white">
                  Let's work together
                </CardTitle>
                <CardDescription>
                  In which field do you need me? Contact me and I will be happy
                  to respond to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col md:flex-row  gap-4">
                      <div>
                        <Input
                          type="name"
                          id="firstname"
                          placeholder="Firstname*"
                          onChange={(e) => setFirstname(e.target.value)}
                          value={firstname}
                        />
                      </div>
                      <div>
                        <Input
                          type="name"
                          id="lastname"
                          placeholder="Lastname*"
                          onChange={(e) => setLastname(e.target.value)}
                          value={lastname}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-row gap-4">
                      <div>
                        <Input
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          placeholder="E-mail*"
                        />
                      </div>
                      <div>
                        <Input
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          id="phone"
                          type="tel"
                          placeholder="Phone*"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Select
                        onValueChange={(e) => {
                          setService(e);
                        }}
                      >
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {jobServices.map((service, index) => (
                            <SelectItem key={index} value={service.service}>
                              {service.service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message"
                        placeholder="Type your message here..."
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  className="submit-btn w-full"
                  onClick={handleSubmit}
                  style={{ backgroundColor: warning.dark, color: common.white }}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="datas">
            <InfoItem
              icon={<FaPhoneAlt />}
              label="Phone"
              value={<a href="tel:+32492473290">+32 492 47 32 90</a>}
            />
            <InfoItem
              icon={<MdEmail />}
              label="E-mail"
              value={
                <a href="mailto:v.dag@viallydaggroup.com">
                  v.dag@viallydaggroup.com
                </a>
              }
            />
            <InfoItem
              icon={<IoLocationSharp />}
              label="Adress"
              value={"5000 Namur, Belgium"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
