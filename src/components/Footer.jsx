import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { LuArrowRight } from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";

const Footer = () => { 
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/Robertise",
      color: "#6b7280",
      hoverColor: "#ffffff",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/do-huy-294353354/",
      color: "#60a5fa",
      hoverColor: "#3b82f6",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/robertiz_/",
      color: "#f472b6",
      hoverColor: "#ec4899",
    },
    {
      icon: SiGmail,
      label: "Email",
      url: "mailto:giahuydo705@gmail.com",
      color: "#ef4444",
      hoverColor: "#dc2626",
    },
  ];

  const contactInfo = [
    {
      title: "Email",
      content: "giahuydo705@gmail.com",
      link: "mailto:giahuydo705@gmail.com",
    },
    {
      title: "Location",
      content: "Ho Chi Minh City, Vietnam",
      link: null,
    },
    {
      title: "Phone",
      content: "+84 86 216 5876",
      link: "tel:+84862165876",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-(--border-color) bg-(--bg-primary) text-(--text-primary) transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Get In Touch Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="mb-12 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4 text-(--text-primary)"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-lg text-(--text-secondary) max-w-2xl mx-auto"
              variants={itemVariants}
            >
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below.
            </motion.p>
          </div>

          {/* Contact Information Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-(--card-background) rounded-lg p-6 border border-(--border-color) hover:border-(--primary) hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-(--primary) mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {info.content}
                    <LuArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ) : (
                  <p className="text-(--text-secondary)">{info.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const isHovered = hoveredSocial === index;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-all duration-300 transform hover:scale-110"
                  style={{ 
                    color: isHovered ? social.hoverColor : social.color 
                  }}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <a
              href="mailto:giahuydo705@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-(--primary) text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Send Me an Email
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-(--border-color) pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            className="text-(--text-secondary) text-sm"
            variants={itemVariants}
          >
            © {currentYear} Gia Huy Do. All rights reserved.
          </motion.p> 
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
