import { useEffect } from "react";

export default function TaskLifecycle() {
    useEffect(() => {
        console.log('Componente montado');

        return () => {
            console.log('Componente desmontado')
        };
    }, []);

    return <p className="log">Revisa la consola para ver el ciclo de vida</p>;
}