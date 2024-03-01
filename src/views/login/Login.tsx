import { useState } from "react";
import {
    VStack,
    Text,
    TextField,
    Button,
    Image,
    HStack,
    Divider,
    useToast,
    Card,
    IconButton,
} from "@inovaetech/components-react";
import { useTheme } from "@inovaetech/components-react/theme";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [matricula, setMatricula] = useState<number | null>(null);
    const [senha, setSenha] = useState<string | null>(null);
    const { isDark, changeTheme } = useTheme();
    const { showError } = useToast();
    const navigate = useNavigate();

    const autenticar = async (input: { matricula: number | null; senha: string | null }) => {
        if (!input.matricula) {
            showError("Atenção! Falta matrícula!");
        } else if (!input.senha) {
            showError("Atenção! Falta senha!");
        } else {
            navigate("/menu");
            // Coloque a lógica de autenticação aqui
            // try {
            //     const response = await findUser({
            //         where: { password: input.senha, registration: input.matricula },
            //     });
            //     if (response.status === 200) {
            //         await AsyncStorage.setItem("@auth", JSON.stringify(response.data.message.userAccess));
            //         navigation.navigate("OperationMode");
            //     } else {
            //         setError("Usuário e/ou senha inválidos!");
            //     }
            // } catch (error) {
            //     setError("Erro ao autenticar o usuário!");
            // }
        }
    };

    return (
        <HStack bg="background" justifyContent="center" alignItems="center" className="w-full h-full">
            <HStack justifyContent="center" alignItems="center" className="h-full w-2/3 ">
                <Image src="./frota2.png" width={700} height={700} />
            </HStack>

            <HStack className="h-full w-1/3 " justifyContent="center" bg="background">
                <VStack className="justify-center" alignItems="center">
                    <Card
                        className="justify-center w-[80%] h-[70%] items-center border-hidden"
                        elevated
                        bg="surface"
                        rounded="sm"
                    >
                        <IconButton
                            icon={isDark ? "PiMoon" : "PiSun"}
                            onPress={() => {
                                changeTheme();
                            }}
                        ></IconButton>
                        <Text className="font-bold text-6xl text-center">Bem vindo!</Text>
                        <Image src="./frota.png" width={300} height={300} className="m-4" />
                        <Text className="font-bold text-3xl text-center ">
                            Sistema de controle de veículos da frota do CAD!
                        </Text>
                        <VStack className="justify-center w-[50%]" alignItems="center">
                            <Divider className="bg-primary-300 " />
                            <TextField
                                isBlock
                                placeholder="Matrícula"
                                aria-label="Matrícula"
                                type="number"
                                leftIcon="PiUserCircleFill"
                                onChange={(value) => {
                                    setMatricula(Number(value));
                                }}
                            ></TextField>
                            <TextField
                                isBlock
                                aria-label="Senha"
                                className="mb-1"
                                placeholder="Senha"
                                type="password"
                                leftIcon="PiPasswordFill"
                                onChange={(value) => {
                                    setSenha(value);
                                }}
                            ></TextField>
                            <Button
                                className="font-bold w-[100%]"
                                leftIcon="PiLockKeyOpenFill"
                                color="primary"
                                classNames={{ icon: "left" }}
                                onPress={() =>
                                    autenticar({
                                        matricula: Number(matricula),
                                        senha: senha,
                                    })
                                }
                            >
                                Login
                            </Button>
                        </VStack>
                    </Card>
                </VStack>
            </HStack>
        </HStack>
    );
}
