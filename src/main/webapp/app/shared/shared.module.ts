import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjetGitHubSharedLibsModule, ProjetGitHubSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProjetGitHubSharedLibsModule, ProjetGitHubSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProjetGitHubSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetGitHubSharedModule {
  static forRoot() {
    return {
      ngModule: ProjetGitHubSharedModule
    };
  }
}
