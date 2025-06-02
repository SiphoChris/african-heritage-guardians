import { Button, Flex, TextField } from "@radix-ui/themes";

import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Facebook from "@/components/icons/Facebook";
import TikTok from "@/components/icons/TikTok";
import Instagram from "../icons/Instagram";
import YouTube from "../icons/YouTube";
import Pattern from "../Pattern";

function Footer() {
  return (
    <footer>
      <div>
        <Pattern />
      </div>
      <div className="bg-gray-200">
        <div className="flex flex-wrap justify-between px-8 md:px-16 lg:px-36 py-12">
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-slate-800">
              Quick Links
            </h3>
            <ul>
              {footerLinks.map((link) => {
                return (
                  <li key={link.name} className="text-sm leading-6">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
                    <div className="space-y-4">
            <h3 className="text-md font-semibold text-slate-800">
              More Information
            </h3>
            <ul>
              {footerLinks.map((link) => {
                return (
                  <li key={link.name} className="text-sm leading-6">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-md font-semibold text-slate-800">Follow Us</h3>
            <ul className="flex gap-x-4">
              <li className="size-8">
                <Link href="https://facebook.com">
                  <Facebook />
                </Link>
              </li>
              <li className="size-8">
                <Link href="https://facebook.com">
                  <TikTok />
                </Link>
              </li>
              <li className="size-8">
                <Link href="https://facebook.com">
                  <Instagram />
                </Link>
              </li>
              <li className="size-8">
                <Link href="https://facebook.com">
                  <YouTube />
                </Link>
              </li>
            </ul>
            <Flex direction="column" gap="2" className="mt-4">
              <h3 className="text-md font-semibold text-center mb-4 text-slate-800">
                Sign Up For Our Newsletter
              </h3>
              <Flex direction="row" gap="2">
                <TextField.Root size="2" placeholder="Your Email" />
                <Button size="2">Sign Up</Button>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="px-8 md:px-16 lg:px-36 flex justify-between py-4 border-t border-gray-300">
          <small className="text-xs text-gray-600">
            &copy; Copyrights Reserved
          </small>
          <small className="text-xs text-gray-600">
            2025 - {new Date().getFullYear()} &#124; African Heritage Guardians
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
