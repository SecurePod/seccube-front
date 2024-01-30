import { CardAccordProps } from '@/components/lab/accordion/card-accord'

export const AttackData: CardAccordProps[] = [
  {
    img: 'https://10000.co.jp/wp-content/uploads/2023/08/meta-image.png',
    num: 1,
    title: 'パスワードクラック入門',
    desc: 'xxxxx',
    tag: 'sshBrute',
    children: ['Hydraを使ったSSHパスワードクラック', 'サンプル2'],
  },
]

export const basicData: CardAccordProps[] = [
  {
    img: 'https://genzouw.com/wp-content/uploads/2019/02/kisspng-bash-shell-command-line-interface-ls-5ae067b4a53005.9908964615246560526766.png',
    num: 2,
    title: 'コマンドラインを使ってみよう',
    desc: 'xxxxx',
    tag: 'commandline',
    children: ['超基礎コマンド編', '基礎コマンド編'],
  },
]

export const defenseData: CardAccordProps[] = [
  {
    img: 'https://haostreinamentos.com.br/images/cursos/Sql.png',
    num: 2,
    title: 'SQLインジェクションについて学ぼう',
    desc: 'xxxxx',
    tag: 'sqli',
    children: ['SQLインジェクションを試す', 'SQLインジェクションを防止する'],
  },
]
