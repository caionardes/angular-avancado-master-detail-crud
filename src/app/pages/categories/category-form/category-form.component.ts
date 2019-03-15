import { Component, Injector } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent extends BaseResourceFormComponent<Category> {

  constructor(protected categoryService: CategoryService, protected injector: Injector) {
    super(injector, new Category(), categoryService, Category.fromJson);
  }

  protected buildResourceForm(): void {

    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.minLength(2), Validators.required]],
      description: [null, [Validators.minLength(2), Validators.required]]
    });
  }

  protected editionPageTitle(): string {
    const categoryName = this.resource.name || '';
    return 'Editando Categoria: ' + categoryName;
  }

  protected creationPageTitle(): string {
    return 'Cadastro de nova Categoria';
  }
}
