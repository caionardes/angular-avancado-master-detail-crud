import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer' }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0],
        paid: false, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Gás mensal'
      } as Entry,
      { id: 2, name: 'Sumplementos', categoryId: categories[1].id, category: categories[1],
        paid: true, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Descrição fake'
      } as Entry,
      { id: 3, name: 'Salário da Empresa X', categoryId: categories[3].id, category: categories[3],
        paid: true, date: '14/10/2018', amount: '500,30', type: 'revenue',
        description: 'Descrição fake'
      } as Entry,
      { id: 4, name: 'Aluguel de Filme', categoryId: categories[2].id, category: categories[2],
        paid: true, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Descrição fake'
      } as Entry,
      { id: 5, name: 'Mercado', categoryId: categories[2].id, category: categories[2],
        paid: false, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Descrição fake'
      } as Entry,
      { id: 6, name: 'Video Game da Filha', categoryId: categories[1].id, category: categories[1],
        paid: true, date: '14/10/2018', amount: '70,30', type: 'expense'
        // , description: 'Descrição fake'
      } as Entry,
      { id: 7, name: 'Cinema', categoryId: categories[2].id, category: categories[2],
        paid: true, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Descrição fake'
      } as Entry,
      { id: 8, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1],
        paid: true, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Descrição fake'
      } as Entry,
      { id: 9, name: 'Uber', categoryId: categories[2].id, category: categories[2],
        paid: true, date: '14/10/2018', amount: '70,30', type: 'expense',
        description: 'Descrição fake'
      } as Entry,
      { id: 10, name: 'Projeto X com Java', categoryId: categories[4].id, category: categories[4],
        paid: false, date: '14/10/2018', amount: '70,30', type: 'revenue',
        description: 'Descrição fake'
      } as Entry
    ];

    return { categories, entries };
  }



  // public id?: number,
  //   public name?: string,
  //   public categoryId?: number,
  //   public category?: Category
  //   public paid?: boolean,
  //   public date?: string,
  //   public amount?: string,
  //   public type?: string,
  //   public description?: string,
}
