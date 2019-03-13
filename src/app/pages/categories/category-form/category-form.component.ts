import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm = false;
  category = new Category();

  constructor(
      private categoryService: CategoryService,
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currentAction === 'new') {
      this.createCategory();
    } else if (this.currentAction === 'edit') {
      this.updateCategory();
    } else {
      alert('Ação inválida!');
    }
  }

  private createCategory() {
    const category: Category = Object.assign(new Category(), this.categoryForm.value);

    this.categoryService.create(category)
      .subscribe(
          (cat) => this.actionsForSuccess(cat),
          error => this.actionsForError(error)
      );
  }

  private updateCategory() {
    const category: Category = Object.assign(new Category(), this.categoryForm.value);
    this.categoryService.update(category)
      .subscribe(
          (cat) => this.actionsForSuccess(cat),
          error => this.actionsForError(error)
      );
  }

  private actionsForError(error) {
    toastr.error('Ocorreu um erro ao processar sua solicitação!');
    this.submittingForm = false;

    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com servidor!'];
    }
  }

  private actionsForSuccess(category: Category) {
    toastr.success('Solicitação processada com sucesso!');

    this.router.navigateByUrl('categories', {skipLocationChange: true})
    .then(() => this.router.navigate(['categories', category.id, 'edit']));
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }
  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.compose([Validators.minLength(2), Validators.required])],
      description: [null]
    });
  }
  private loadCategory() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get('id')))
      ).subscribe(
        (category) => {
          this.category = category;
          // faz o bind da categoria com o formulario categoryForm recem criado.
          this.categoryForm.patchValue(this.category);
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
  }

  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de nova Categoria';
    } else {
      const categoryName = this.category.name || '';
      this.pageTitle = 'Editando Categoria: ' + categoryName;
    }
  }
}
