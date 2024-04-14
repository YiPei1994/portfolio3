import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { explicitTheme } from "../contants";

function Footer() {
  const [screenRef, setScreenRef] = useState(0);

  useEffect(() => {
    setScreenRef(window.innerWidth);
  }, []);

  return (
    <footer className="flex items-center justify-center my-8 gap-4 flex-col">
      <GitHubCalendar
        username="yipei1994"
        theme={explicitTheme}
        blockMargin={
          screenRef < 768 ? 1 : screenRef < 1024 ? 2 : screenRef < 1550 ? 2 : 4
        }
        blockRadius={2}
        blockSize={
          screenRef < 768 ? 5 : screenRef < 1024 ? 6 : screenRef < 1550 ? 8 : 10
        }
        fontSize={
          screenRef < 768
            ? 6
            : screenRef < 1024
            ? 8
            : screenRef < 1550
            ? 12
            : 14
        }
        colorScheme="light"
      />
      <footer className="flex flex-col gap-2 justify-center items-center  border-t-slate-200/10">
        <p className="text-sm">Created by Yi Pei Zhu.</p>
        <p className="text-sm">Copyright © 2024 All Rights Reserved</p>
      </footer>
    </footer>
  );
}

export default Footer;
