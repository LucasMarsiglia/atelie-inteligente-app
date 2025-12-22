import { Header } from '@/components/common/header/header';

export function PrivacyPolicyScreen() {
  return (
    <main>
      <Header />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-2xl font-bold mb-2">POLÍTICA DE PRIVACIDADE</h1>
        <h2 className="text-xl font-semibold mb-4">Ateliê Inteligente</h2>
        <p className="text-gray-600 mb-6">Última atualização: //__</p>
        <p className="mb-4">
          O Ateliê Inteligente respeita a sua privacidade e está comprometido com a proteção dos
          dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD –
          Lei nº 13.709/2018).
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Quais dados coletamos</strong>
            <p className="mt-2">
              Coletamos apenas os dados necessários para o funcionamento do aplicativo, incluindo:
            </p>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Nome</li>
              <li>E-mail</li>
              <li>Conteúdos enviados pelo usuário (descrições, imagens, mensagens)</li>
              <li>Informações de autenticação (gerenciadas pelo Supabase)</li>
              <li>Não coletamos dados sensíveis.</li>
            </ul>
          </li>

          <li>
            <strong>Como os dados são utilizados</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Criar e gerenciar contas de usuário</li>
              <li>Permitir o uso das funcionalidades do aplicativo</li>
              <li>Gerar descrições e conteúdos com apoio de inteligência artificial</li>
              <li>Comunicação básica relacionada ao uso da plataforma</li>
            </ul>
          </li>

          <li>
            <strong>Armazenamento e segurança</strong>
            <p className="mt-2">
              Os dados são armazenados em infraestrutura segura, utilizando serviços de terceiros
              confiáveis. Adotamos medidas técnicas para proteger as informações contra acessos não
              autorizados, perda ou uso indevido.
            </p>
          </li>

          <li>
            <strong>Compartilhamento de dados</strong>
            <p className="mt-2">
              Não vendemos nem compartilhamos dados pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Quando necessário para o funcionamento do aplicativo</li>
              <li>Quando exigido por obrigação legal</li>
            </ul>
          </li>

          <li>
            <strong>Direitos do usuário</strong>
            <p className="mt-2">O usuário pode, a qualquer momento:</p>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Solicitar acesso aos seus dados</li>
              <li>Solicitar a correção ou exclusão de seus dados</li>
              <li>Excluir sua conta da plataforma</li>
            </ul>
            <p className="mt-1">
              Solicitações podem ser feitas pelo próprio aplicativo ou pelo e-mail de suporte.
            </p>
          </li>

          <li>
            <strong>Exclusão de dados</strong>
            <p className="mt-2">
              Ao solicitar a exclusão da conta, os dados pessoais do usuário serão removidos,
              respeitando obrigações legais aplicáveis.
            </p>
          </li>

          <li>
            <strong>Alterações nesta política</strong>
            <p className="mt-2">
              Esta Política de Privacidade pode ser atualizada a qualquer momento. A versão mais
              recente estará sempre disponível no aplicativo.
            </p>
          </li>

          <li>
            <strong>Contato</strong>
            <p className="mt-2">
              Em caso de dúvidas, entre em contato pelo e-mail: <br />
              📧{' '}
              <a href="mailto:suporte@atelieinteligente.com" className="text-blue-600 underline">
                suporte@atelieinteligente.com
              </a>
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}
