import { HStack, VStack, Image, Card, Text, Divider, TextField, Button } from "@inovaetech/components-react";
import { MenuHeader } from "../../components/MenuHeader";
import { useState } from "react";

export function CriarVeiculo() {
    const [placa, setPlaca] = useState<string | null>("");
    const [marca, setMarca] = useState<string | null>("");
    const [modelo, setModelo] = useState<string | null>("");
    const [cor, setCor] = useState<string | null>("");
    const [km, setKm] = useState<string | null>("");
    const [detalhes, setDetalhes] = useState<string | null>("");

    const limpar = () => {
        setPlaca("");
        setMarca("");
        setModelo("");
        setKm("");
        setDetalhes("");
        setCor("");
    };

    const adicionarVeiculo = () => {
        console.log("placa", placa);
        console.log(marca);
        console.log(modelo);
        console.log(cor);
        console.log(km);
        console.log(detalhes);
    };

    return (
        <VStack bg="background" justifyContent="center" alignItems="center" className="h-full w-full">
            <MenuHeader />
            <HStack className="h-full w-full">
                <HStack justifyContent="center" alignItems="center" className="w-2/3 ">
                    <Image src="./frota4.png" width={700} height={700} />
                </HStack>
                <HStack justifyContent="center" alignItems="center" className="w-1/3 ">
                    <VStack className="justify-center w-[100%] h-[100%]" alignItems="center">
                        <Card
                            className="justify-center items-center w-[80%] h-[80%] border-hidden bg-slate-200"
                            elevated
                            bg="surface"
                            rounded="sm"
                        >
                            <VStack className="justify-center w-[70%]" alignItems="center">
                                <Text className="font-bold text-3xl text-center">Adicionar Veículo</Text>
                                <Divider orientation="horizontal" color="error" className="w-full" />
                                <TextField
                                    className="p-1"
                                    label="Placa:"
                                    onChange={(e) => {
                                        setPlaca(e);
                                    }}
                                    isBlock
                                    value={String(placa)}
                                    placeholder="Placa"
                                    aria-label="Placa"
                                ></TextField>
                                <HStack>
                                    <TextField
                                        className="p-1"
                                        label="Marca:"
                                        value={String(marca)}
                                        onChange={(e) => {
                                            setMarca(e);
                                        }}
                                        isBlock
                                        aria-label="Marca"
                                        placeholder="Marca"
                                    ></TextField>
                                    <TextField
                                        className="p-1"
                                        label="Modelo:"
                                        value={String(modelo)}
                                        onChange={(e) => {
                                            setModelo(e);
                                        }}
                                        isBlock
                                        aria-label="Modelo"
                                        placeholder="Modelo"
                                    ></TextField>
                                </HStack>
                                <HStack>
                                    <TextField
                                        className="p-1"
                                        label="Cor:"
                                        value={String(cor)}
                                        onChange={(e) => {
                                            setCor(e);
                                        }}
                                        isBlock
                                        aria-label="Cor"
                                        placeholder="Cor"
                                    ></TextField>
                                    <TextField
                                        className="p-1"
                                        label="Quilometragem:"
                                        value={String(km)}
                                        onChange={(e) => {
                                            setKm(e);
                                        }}
                                        isBlock
                                        aria-label="KM"
                                        placeholder="KM"
                                        type="number"
                                    ></TextField>
                                </HStack>
                                <TextField
                                    className="p-1"
                                    value={String(detalhes)}
                                    onChange={(e) => {
                                        setDetalhes(e);
                                    }}
                                    label="Detalhes adicionais:"
                                    isBlock
                                    aria-label="Detalhes"
                                    placeholder="Detalhes"
                                ></TextField>
                                <HStack className="m-2 w-[100%]">
                                    <Button
                                        className="font-bold w-[50%]"
                                        leftIcon="PiPlusCircleFill"
                                        color="primary"
                                        classNames={{ icon: "left" }}
                                        onPress={() => adicionarVeiculo()}
                                    >
                                        Adicionar
                                    </Button>
                                    <Divider orientation="vertical" color="error" />
                                    <Button
                                        className="font-bold w-[50%]"
                                        leftIcon="PiEraserFill"
                                        color="error"
                                        classNames={{ icon: "left" }}
                                        onPress={() => limpar()}
                                    >
                                        Limpar
                                    </Button>
                                </HStack>
                            </VStack>
                        </Card>
                    </VStack>
                </HStack>
            </HStack>
        </VStack>
    );
}
