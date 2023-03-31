interface Teste {
  params: {
    id: number
  }
}

export default function PageInflacao({ params }: Teste) {
  return (
    <>
      <h2>teste</h2>
      <p>{params.id}</p>
    </>
  )
}
