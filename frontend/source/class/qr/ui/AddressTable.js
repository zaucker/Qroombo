/* ************************************************************************
   Copyright: 2012 OETIKER+PARTNER AG
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
   Utf8Check: äöü
************************************************************************ */

/*
#asset(qx/icon/${qx.icontheme}/22/actions/document-properties.png)
#asset(qx/icon/${qx.icontheme}/22/actions/contact-new.png)
*/

/**
 * The searchView with search box, table and view area
 */
qx.Class.define("qr.ui.AddressTable", {
    extend : qx.ui.core.Widget,
    type : 'singleton',

    construct : function() {
        this.base(arguments);
        this._setLayout(new qx.ui.layout.VBox());
        var tb = new qx.ui.core.Widget().set({ paddingBottom : 8 });
        tb._setLayout(new qx.ui.layout.HBox(5));
        this._add(tb);
        var addBtn = new qx.ui.form.Button(this.tr('Add Address'), 'icon/22/actions/contact-new.png');
        tb._add(addBtn);
        var editBtn = new qx.ui.form.Button(this.tr('Edit Address'), 'icon/22/actions/document-properties.png');
        tb._add(editBtn);
        var control = new qr.ui.TabView('addr');
        this._add(control);
        var editPopup = new qr.ui.EditPopup('addr',this.tr("Address Editor"));
        editBtn.addListener('execute',function(){ editPopup.show(control.getSelectedRecId()) }, this );
        addBtn.addListener('execute',function(){ editPopup.show({}) }, this);
        editPopup.addListener('close',function(){ control.reloadData() }, this);
        control.addListener('dblclick',function(){
            editPopup.show(control.getSelectedRecId())
        },this);
    }
});
