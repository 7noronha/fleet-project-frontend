import { useState } from "react";
import { Avatar, Button, HStack, IconButton, Text, VStack } from "@inovaetech/components-react";
import { useTheme } from "@inovaetech/components-react/theme";
import { useNavigate } from "react-router-dom";

export function MenuHeader() {
    const { isDark, changeTheme } = useTheme();
    const [isSubMenuVeiculosOpen, setSubMenuVeiculosOpen] = useState(false);
    const [isSubMenuServicoOpen, setSubMenuServicoOpen] = useState(false);
    const [isSubMenuManutencaoOpen, setSubMenuManutencaoOpen] = useState(false);
    const [isSubMenuDocumentacaoOpen, setSubMenuDocumentacaoOpen] = useState(false);
    const [isSubMenuOcorrenciaOpen, setSubMenuOcorrenciaOpen] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnterVeiculo = () => {
        setSubMenuVeiculosOpen(true);
    };

    const handleMouseLeaveVeiculo = () => {
        setSubMenuVeiculosOpen(false);
    };

    const handleMouseEnterServico = () => {
        setSubMenuServicoOpen(true);
    };

    const handleMouseLeaveServico = () => {
        setSubMenuServicoOpen(false);
    };

    const handleMouseEnterManutencao = () => {
        setSubMenuManutencaoOpen(true);
    };

    const handleMouseLeaveManutencao = () => {
        setSubMenuManutencaoOpen(false);
    };

    const handleMouseEnterDocumentacao = () => {
        setSubMenuDocumentacaoOpen(true);
    };

    const handleMouseLeaveDocumentacao = () => {
        setSubMenuDocumentacaoOpen(false);
    };

    const handleMouseEnterOcorrencia = () => {
        setSubMenuOcorrenciaOpen(true);
    };

    const handleMouseLeaveOcorrencia = () => {
        setSubMenuOcorrenciaOpen(false);
    };

    const handleSubMenuVeioulosClick = (item: string) => {
        // Lógica para lidar com a seleção do submenu
        console.log(`Selecionou: ${item}`);
        // Fechar o submenu após a seleção (opcional)
        setSubMenuVeiculosOpen(false);
    };

    return (
        <HStack bg="background" className="justify-between w-full font-bold items-center p-1">
            <Avatar initials={"EX"} isOutline src="./user.png" />
            <Text className="font-bold">Olá, Usuario teste</Text>
            <VStack onMouseEnter={handleMouseEnterVeiculo} onMouseLeave={handleMouseLeaveVeiculo}>
                <Button leftIcon="PiCarFill" className="w-40 text-white" color={isDark ? "default" : "primary"}>
                    Veículos
                </Button>
                {isSubMenuVeiculosOpen && (
                    <VStack className="flex flex-col items-center relative">
                        {/* <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute"
                            onPress={() => handleSubMenuVeioulosClick("Consulta")}
                        >
                            Consulta
                        </Button> */}
                        <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute"
                            onPress={() => navigate("/adicionarveiculo")}
                        >
                            Adicionar
                        </Button>
                        {/* <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute"
                            onPress={() => handleSubMenuVeioulosClick("Alterar")}
                        >
                            Alterar
                        </Button>
                        <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute"
                            onPress={() => handleSubMenuVeioulosClick("Excluir")}
                        >
                            Excluir
                        </Button> */}
                    </VStack>
                )}
            </VStack>
            <VStack onMouseEnter={handleMouseEnterServico} onMouseLeave={handleMouseLeaveServico}>
                <Button leftIcon="PiGearFill" className="w-40 text-white" color={isDark ? "default" : "primary"}>
                    Serviços
                </Button>
                {isSubMenuServicoOpen && (
                    <VStack className="flex flex-col items-center relative">
                        <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute top-[5px]"
                            onPress={() => handleSubMenuVeioulosClick("Consulta")}
                        >
                            Consulta
                        </Button>
                        <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute top-[50px]"
                            onPress={() => handleSubMenuVeioulosClick("Adicionar")}
                        >
                            Adicionar
                        </Button>
                        <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute top-[95px]"
                            onPress={() => handleSubMenuVeioulosClick("Alterar")}
                        >
                            Alterar
                        </Button>
                        <Button
                            color={isDark ? "default" : "primary"}
                            className="w-40 text-white px-4 py-2 absolute top-[140px]"
                            onPress={() => handleSubMenuVeioulosClick("Excluir")}
                        >
                            Excluir
                        </Button>
                    </VStack>
                )}
            </VStack>
            <VStack onMouseEnter={handleMouseEnterManutencao} onMouseLeave={handleMouseLeaveManutencao}>
                <Button leftIcon="PiHammerFill" className="w-40 text-white" color={isDark ? "default" : "primary"}>
                    Manutenções
                </Button>
                {isSubMenuManutencaoOpen && (
                    <VStack className="flex flex-col items-center relative">
                        <VStack className="absolute top-[5px] gap-2" onMouseLeave={handleMouseLeaveManutencao}>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2"
                                onPress={() => handleSubMenuVeioulosClick("Consulta")}
                            >
                                Consulta
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2"
                                onPress={() => handleSubMenuVeioulosClick("Adicionar")}
                            >
                                Adicionar
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2"
                                onPress={() => handleSubMenuVeioulosClick("Alterar")}
                            >
                                Alterar
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2"
                                onPress={() => handleSubMenuVeioulosClick("Excluir")}
                            >
                                Excluir
                            </Button>
                        </VStack>
                    </VStack>
                )}
            </VStack>
            <VStack onMouseEnter={handleMouseEnterDocumentacao} onMouseLeave={handleMouseLeaveDocumentacao}>
                <Button leftIcon="PiNoteFill" className="w-40 text-white" color={isDark ? "default" : "primary"}>
                    Documentação
                </Button>
                {isSubMenuDocumentacaoOpen && (
                    <VStack className="flex flex-col items-center relative">
                        <VStack className="absolute top-[5px] gap-2" onMouseLeave={handleMouseLeaveDocumentacao}>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Consulta")}
                            >
                                Consulta
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Adicionar")}
                            >
                                Adicionar
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Alterar")}
                            >
                                Alterar
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Excluir")}
                            >
                                Excluir
                            </Button>
                        </VStack>
                    </VStack>
                )}
            </VStack>
            <VStack onMouseEnter={handleMouseEnterOcorrencia} onMouseLeave={handleMouseLeaveOcorrencia}>
                <Button
                    leftIcon="PiSealWarningFill"
                    className="w-40  text-white"
                    color={isDark ? "default" : "primary"}
                >
                    Ocorrências
                </Button>
                {isSubMenuOcorrenciaOpen && (
                    <VStack className="flex flex-col items-center relative">
                        <VStack className="absolute top-[5px] gap-2" onMouseLeave={handleMouseLeaveOcorrencia}>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Consulta")}
                            >
                                Consulta
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Adicionar")}
                            >
                                Adicionar
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Alterar")}
                            >
                                Alterar
                            </Button>
                            <Button
                                color={isDark ? "default" : "primary"}
                                className="w-40 text-white px-4 py-2 "
                                onPress={() => handleSubMenuVeioulosClick("Excluir")}
                            >
                                Excluir
                            </Button>
                        </VStack>
                    </VStack>
                )}
            </VStack>
            <Button
                leftIcon="PiMagnifyingGlassBold"
                className="w-40  text-white"
                color={isDark ? "default" : "primary"}
            >
                Consultas
            </Button>
            <Button leftIcon="PiArrowCircleLeftFill" className="w-40 text-white" color={isDark ? "default" : "error"}>
                Sair
            </Button>
            <IconButton
                className="mt-2"
                icon={isDark ? "PiMoon" : "PiSun"}
                onPress={() => {
                    changeTheme();
                }}
            ></IconButton>
        </HStack>
    );
}
