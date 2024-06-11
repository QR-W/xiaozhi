"use strict";
class ID extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.patientName = '李小九';
        this.patientAge = 70;
        this.patientGender = '男';
        this.admissionDate = '2020/08/09';
        this.roomNumber = '0133';
        this.mainDoctor = '张 虹';
        this.responsibleNurse = '李晓慧';
        this.doctorAdvice = '每天早上服用一粒药物';
        this.isAdviceExecuted = false;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.patientName !== undefined) {
            this.patientName = params.patientName;
        }
        if (params.patientAge !== undefined) {
            this.patientAge = params.patientAge;
        }
        if (params.patientGender !== undefined) {
            this.patientGender = params.patientGender;
        }
        if (params.admissionDate !== undefined) {
            this.admissionDate = params.admissionDate;
        }
        if (params.roomNumber !== undefined) {
            this.roomNumber = params.roomNumber;
        }
        if (params.mainDoctor !== undefined) {
            this.mainDoctor = params.mainDoctor;
        }
        if (params.responsibleNurse !== undefined) {
            this.responsibleNurse = params.responsibleNurse;
        }
        if (params.doctorAdvice !== undefined) {
            this.doctorAdvice = params.doctorAdvice;
        }
        if (params.isAdviceExecuted !== undefined) {
            this.isAdviceExecuted = params.isAdviceExecuted;
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/IDPage.ets(17:5)");
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.Center);
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#E9967A');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('四川大学华西医院');
            Text.debugLine("pages/IDPage.ets(18:7)");
            Text.fontSize(24);
            Text.textAlign(TextAlign.Center);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ bottom: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/IDPage.ets(23:7)");
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Center);
            Column.width('90%');
            Column.padding(20);
            Column.backgroundColor('#f8f8f8');
            Column.borderRadius(10);
            Column.shadow({
                color: Color.Black,
                offsetX: 0,
                offsetY: 10,
                radius: 20
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/IDPage.ets(38:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/IDPage.ets(39:9)");
            Column.width('50%');
            Column.padding(10);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`姓名: ${this.patientName}`);
            Text.debugLine("pages/IDPage.ets(40:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`年龄: ${this.patientAge}`);
            Text.debugLine("pages/IDPage.ets(44:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`性别: ${this.patientGender}`);
            Text.debugLine("pages/IDPage.ets(48:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`入院日期: ${this.admissionDate}`);
            Text.debugLine("pages/IDPage.ets(52:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/IDPage.ets(58:9)");
            Column.width("50%");
            Column.padding(10);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`床号: ${this.roomNumber}`);
            Text.debugLine("pages/IDPage.ets(59:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`主管医生: ${this.mainDoctor}`);
            Text.debugLine("pages/IDPage.ets(63:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`责任护士: ${this.responsibleNurse}`);
            Text.debugLine("pages/IDPage.ets(67:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`医嘱: ${this.doctorAdvice}`);
            Text.debugLine("pages/IDPage.ets(77:7)");
            Text.fontSize(18);
            Text.margin({ bottom: 20 });
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
loadDocument(new ID(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=IDPage.js.map