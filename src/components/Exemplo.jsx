const Exemplo = () => {
    const name = 'André Lima';

    return (
        // Precisa de um elemento principal
        <div>
            {/* Não utilizar "class" */}
            <h1 className="exemplo">Exemplo</h1>

            <p>Olá { name }!</p>
        </div>
    )
}

export default Exemplo;