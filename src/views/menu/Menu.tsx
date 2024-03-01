import { VStack } from "@inovaetech/components-react";
import { MenuHeader } from "../../components/MenuHeader";

export function Menu() {
    return (
        <>
            <VStack bg="background" className="w-full h-full p-2">
                <MenuHeader />
            </VStack>
        </>
    );
}
