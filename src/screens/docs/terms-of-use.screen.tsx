import { Header } from '@/components/header/header';

export function TermsOfUseScreen() {
  return (
    <main>
      <Header />

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-2xl font-bold mb-2"> TERMOS DE USO</h1>
        <h2 className="text-xl font-semibold mb-4">Ateliê Inteligente</h2>
        <p className="text-gray-600 mb-6">Última atualização: //__</p>
        <p className="mb-4">
          Ao acessar e utilizar o Ateliê Inteligente, o usuário concorda com os termos
          abaixo.
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Objeto</strong>
            <p>
              O Ateliê Inteligente é uma plataforma digital que auxilia ceramistas na
              criação, organização e divulgação de seus catálogos e peças, incluindo
              recursos de geração de descrições com apoio de inteligência artificial.
            </p>
          </li>

          <li>
            <strong>Cadastro e conta</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>O usuário é responsável pelas informações fornecidas no cadastro</li>
              <li>Cada conta é pessoal e intransferível</li>
              <li>O usuário deve manter seus dados de acesso em segurança</li>
            </ul>
          </li>

          <li>
            <strong>Uso da plataforma</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Utilizar a plataforma de forma lícita</li>
              <li>
                Não publicar conteúdos ilegais, ofensivos ou que violem direitos de
                terceiros
              </li>
              <li>Ser responsável pelos conteúdos que enviar ou gerar</li>
            </ul>
          </li>

          <li>
            <strong>Conteúdos gerados por inteligência artificial</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>As descrições geradas por IA são sugestões</li>
              <li>O usuário é responsável pela revisão e uso final do conteúdo</li>
              <li>O Ateliê Inteligente não garante resultados comerciais ou de vendas</li>
            </ul>
          </li>

          <li>
            <strong>Limitações de uso (MVP)</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                O aplicativo pode possuir limites de uso por plano (ex: quantidade de
                descrições ou catálogos)
              </li>
              <li>
                Funcionalidades podem ser alteradas, removidas ou aprimoradas durante a
                fase de MVP
              </li>
            </ul>
          </li>

          <li>
            <strong>Propriedade intelectual</strong>
            <p>
              O aplicativo e sua tecnologia pertencem ao Ateliê Inteligente. Os conteúdos
              enviados pelos usuários continuam sendo de sua propriedade.
            </p>
          </li>

          <li>
            <strong>Suspensão ou encerramento</strong>
            <p>
              O Ateliê Inteligente pode suspender ou encerrar contas que violem estes
              Termos ou a legislação vigente.
            </p>
          </li>

          <li>
            <strong>Exclusão de conta</strong>
            <p>
              O usuário pode solicitar a exclusão da conta a qualquer momento, conforme
              descrito na Política de Privacidade.
            </p>
          </li>

          <li>
            <strong>Alterações nos termos</strong>
            <p>
              Estes Termos podem ser atualizados a qualquer momento. A versão vigente
              estará sempre disponível no aplicativo.
            </p>
          </li>

          <li>
            <strong>Contato</strong>
            <p>
              Dúvidas ou solicitações podem ser enviadas para: <br />
              📧{' '}
              <a
                href="mailto:suporte@atelieinteligente.com"
                className="text-blue-600 underline"
              >
                suporte@atelieinteligente.com
              </a>
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}
