import CubeCanvas from "@/components/CubeCanvas";
import { ArrowRightIcon, CpuChipIcon } from "@heroicons/react/20/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@nextui-org/react";

export default async function Page() {
  return (
    <div>
      <div className="max-w-[1400px] w-fit mx-auto">
        <div className="flex">
          <div className="w-fit">
            <h1 className="w-fit sm:whitespace-nowrap p-2 ml-5 mt-10 bg-gradient-to-r to-[#a0a5a9] from-[#3d5266]  dark:from-[#e8e4f6] dark:to-[#687786] bg-clip-text text-transparent text-7xl sm:text-8xl font-extrabold">
              Software für immer!
            </h1>
            <h3 className="font-bold text-md sm:text-lg text-gray-500 dark:text-gray-200 ml-8 mt-2">
              Übersichtliche, effiziente und prozessbasierte Softwareentwicklung
              auf Fachebene.
            </h3>
            <Button
              className="bg-5minds-orange shadow-lg text-2xl text-white p-7 ml-8 mt-8"
              radius="full">
              Starte Jetzt! <ArrowRightIcon className="text-white h-4 w-4" />
            </Button>
          </div>
          <div className="w-full">
            <CubeCanvas />
          </div>
        </div>
        <div className="max-w-[1400px] gap-2 grid grid-cols-12 grid-rows-5 px-8 rounded-xl mx-auto mt-10">
          <Card
            isFooterBlurred
            className="w-full h-[400px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Präzise Geschäftsprozessmodellierung
              </p>
              <h4 className="text-white/90 font-medium text-xl">BPMN 2.0</h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="./images/test-bpmn.png"
            />
            <CardFooter className="absolute bg-white/10 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">
                    Präzise Geschäftsprozessmodellierung auf Grundlage des
                    weltweiten ISO-Standards.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                BPMN 2.0
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-12 sm:col-span-5 h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Reibungsloser Workflow
              </p>
              <h4 className="text-white font-medium text-large">
                Modellieren, Programmieren, Debuggen!
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="./images/test-code.png"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-3 h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Sicherheit beginnt hier.
              </p>
              <h4 className="text-white font-medium text-large">
                5Minds Authority
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/images/pattern-blue.svg"
            />
          </Card>

          <Card className="col-span-12 sm:col-span-6 h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Das Herzstück deiner Lösung.
              </p>
              <h4 className="text-white font-medium text-large">
                5Minds Engine
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card example background"
              className="z-0 w-full h-full scale-[1.4] pt-6 -translate-y-6 object-cover"
              src="./images/pattern.svg"
            />
          </Card>

          <Card className="col-span-12 sm:col-span-3 h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                All-in-One Full Stack Lösungen.
              </p>
              <h4 className="text-white font-medium text-large">
                5Minds App-SDK
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card example background"
              className="z-0 w-full h-full scale-[1.4] pt-6 -translate-y-6 object-cover"
              src="./images/pattern-green.svg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[400px] col-span-12 sm:col-span-6">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/80 uppercase font-bold">
                Die perfekte Entwicklungsumgebung.
              </p>
              <h4 className="text-white font-medium text-2xl">5Minds Studio</h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card example background"
              className="z-0 w-full h-full  scale-[1.4] sm:scale-[1.15] pt-6 -translate-y-6 object-cover"
              src="./images/Studio-Icon.svg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">Version:</p>
                <p className="text-white text-tiny">1.15.2</p>
              </div>
              <Button
                className="text-tiny bg-5minds-orange text-white"
                radius="full"
                size="sm">
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[400px] dark:border-1 dark:border-gray-800 col-span-12 sm:col-span-6">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/80 uppercase font-bold">
                Die neuesten Features
              </p>
              <h4 className="text-white font-medium text-2xl">
                5Minds Insiders-Studio
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card example background"
              className="z-0 w-full h-full scale-[1.4] sm:scale-[1.15] pt-6 -translate-y-6 object-cover"
              src="./images/Studio-Insiders-Icon.svg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">Version:</p>
                <p className="text-white text-tiny">1.16.0</p>
              </div>
              <Button
                className="text-tiny bg-5minds-orange text-white"
                radius="full"
                size="sm">
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[800px] hidden sm:block col-span-12 row-span-2">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-black/50 uppercase font-bold">
                Das Zusammenspiel aller ProcessCube-Produkte
              </p>
              <h4 className="text-black font-medium text-2xl">Architektur</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Architektur"
              className="z-0 w-full h-full scale-150 mt-10 ml-10 -translate-y-6 object-cover"
              src="./images/Architecture-light.png"
            />
          </Card>
        </div>
      </div>
      <div className="h-40 sm:h-60 mt-20">
        <div className="flex dark:hidden">
          <div className=" h-[1px] w-[50%] bg-gradient-to-r from-white to-gray-500 via-gray-200" />
          <div className=" h-[1px] w-[50%] bg-gradient-to-r to-white from-gray-500 via-gray-200" />
        </div>
        <div className="dark:flex hidden">
          <div className=" h-[1px] w-[50%] bg-gradient-to-r to-white from-black via-gray-300" />
          <div className=" h-[1px] w-[50%] bg-gradient-to-r from-white to-black via-gray-300" />
        </div>
        <p className="w-fit h-fit mt-[68px] sm:mt-[7rem] mx-auto text-gray-500 dark:text-gray-300">
          Copyright © 2024 5Minds. All rights reserved
        </p>
      </div>
    </div>
  );
}
