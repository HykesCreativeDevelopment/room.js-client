import ko from 'knockout'
import VerbEditorViewModel from './verb-editor-view-model'

export default class VerbEditorTabViewModel {
  constructor (deps, parentViewModel, socket, data) {
    // Properties

    this.parentViewModel = parentViewModel
    this.templateId = 'verb-editor'
    this.viewModel = new VerbEditorViewModel(deps, this, socket, data)

    // Observables

    this.name = ko.observable(VerbEditorTabViewModel.tabName(data))

    // Computeds

    this.active = ko.computed(() => parentViewModel.activeTab() === this)
    this.dirty = ko.computed(() => this.viewModel.dirty())
  }

  templateBinding () {
    return { name: this.templateId, data: this.viewModel }
  }

  select () {
    this.parentViewModel.activeTab(this)
  }

  close () {
    if (this.viewModel.willClose()) {
      this.parentViewModel.closeTab(this)
    }
  }

  tabPaneClasses () {
    return ['tab-pane-editor', 'tab-pane-verb-editor']
  }

  hideIfOnlyMe () {
    return false
  }

  static tabName (data) {
    return `${data.objectId}.${data.verb.name}`
  }
}
