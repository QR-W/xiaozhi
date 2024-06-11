import router from '@ohos:router';
class ListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.completedPatients = [];
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
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    onPageShow() {
        const params = router.getParams();
        if (params && params.completedPatients) {
            this.completedPatients = params.completedPatients;
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/ListPage.ets(16:5)");
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.Center);
            Column.width('100%');
            Column.height('100%');
            Column.padding(20);
            Column.backgroundColor('#E9967A');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('已完成医嘱的病人列表');
            Text.debugLine("pages/ListPage.ets(17:7)");
            Text.fontSize(24);
            Text.textAlign(TextAlign.Center);
            Text.fontWeight(700);
            Text.margin({ bottom: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.debugLine("pages/ListPage.ets(22:7)");
            List.width('90%');
            List.height('auto');
            List.padding(20);
            List.backgroundColor('#f8f8f8');
            List.borderRadius(10);
            List.shadow({
                color: Color.Black,
                offsetX: 0,
                offsetY: 10,
                radius: 20
            });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ListPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ListPage.js.map