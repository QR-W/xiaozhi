class ListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__completedPatients = new ObservedPropertyObjectPU([], this, "completedPatients");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.completedPatients !== undefined) {
            this.completedPatients = params.completedPatients;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__completedPatients.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__completedPatients.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get completedPatients() {
        return this.__completedPatients.get();
    }
    set completedPatients(newValue) {
        this.__completedPatients.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/ListPage.ets(8:5)");
            Column.width("100%");
            Column.height('100%');
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('欢迎您！');
            Text.debugLine("pages/ListPage.ets(9:1)");
            Text.fontSize(50);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ListPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
export {};
//# sourceMappingURL=ListPage.js.map