import Image from "next/image";
import { Text } from "thon-ui";
import giovanni from "./assets/giovanni perfil.png";

export default function MainHeader() {
  return (
    <header
      className={`lg:h-screen relative lg:fixed lg:w-[34.25rem]
      left-0 top-0
      pt-8 pb-6 px-7 lg:pt-0 lg:pb-0
      flex flex-col justify-center items-center 
    bg-[#24292F]`}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={giovanni}
          alt="Foto de Perfil do Giovanni Clayton"
          className="w-[5.5rem] h-[5.5rem] rounded-full"
        />
        <div>
          <Text as="h1" variant="3xl" className="text-gray-100">
            Giovanni Clayton
          </Text>
          <Text
            as="div"
            variant="xs"
            className="text-gray-300 italic -mt-0.5 ml-1"
          >
            Desenvolvedor Front end
          </Text>
        </div>
      </div>
      <div className="w-[18rem] lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-300 italic">
          Em busca da minha primeira oportunidade como desenvolvedor
        </Text>
        <div className="flex gap-1 items-center mt-2">
          <Text variant="sm" className="text-gray-300 italic">
            Você pode me chamar de Gio
          </Text>
          <span>😁</span>
        </div>
      </div>
    </header>
  );
}
