pimcore.registerNS("pimcore.plugin.GroupDocsSignature");

pimcore.plugin.GroupDocsSignature = Class.create(pimcore.plugin.admin, {
	getClassName : function() {
		return "pimcore.plugin.GroupDocsSignature";
	},

	initialize : function() {
		pimcore.plugin.broker.registerPlugin(this);
	},

	pimcoreReady : function(params, broker) {
		// add a sub-menu item under "Extras" in the main menu
		var toolbar = Ext.getCmp("pimcore_panel_toolbar");

		var action = new Ext.Action({
					id : "groupdocs_signature_plugin_menu_item",
					text : "Configure GroupDocs Signature",
					iconCls : "groupdocs_signature_plugin_menu_icon",
					handler : this.showTab
				});

		toolbar.items.items[1].menu.add(action);
	},

	showTab : function() {
		Ext.Ajax.request({
					url : '/plugin/GroupDocsSignature/group-docs-signature-admin/loaddata',
					success : function(response, options) {
						var objAjax = Ext.decode(response.responseText);
						groupDocsSignature.dataLoaded(objAjax);
					},
					failure : function(response, options) {
						Ext.MessageBox.show({
									title : 'GroupDocs Plugin Error',
									msg : 'GroupDocs Plugin Error - can\'t load data!',
									buttons : Ext.MessageBox.OK,
									animateTarget : 'mb9',
									icon : Ext.MessageBox.ERROR
								});
					}
				});

	},
	dataLoaded : function(objAjax) {
		groupDocsSignature.panel = new Ext.Panel({
					id : "groupdocs_signature_plugin_tab_panel",
					title : "Configure GroupDocs Signature",
					iconCls : "groupdocs_signature_plugin_tab_icon",
					border : false,
					layout : {
						type: 'table',
						columns: 2
					},
					closable : true,
					items : [
						{
							xtype : 'label',
							text : 'File ID: ',
							style: 'margin: 8px 3px 3px 8px;'
						},
						{
                            xtype: 'textfield',
                            id : 'fileid',
                            value: objAjax.configs.fileid,
                            width: 250,
                            allowBlank: false,
                            style: 'margin: 8px 3px 3px 3px;'
                        },
                        {
                            xtype : 'label',
                            text : 'Frame border width: ',
                            style: 'margin: 3px 3px 3px 8px;'
                        },
                        {
                            id: 'frameborder',
                            xtype: 'numberfield',
                            value: objAjax.configs.frameborder,
                            width: 250,
                            allowBlank: false,
                            style: 'margin: 3px;'
                        },
                        {
                            xtype : 'label',
                            text : 'Frame width: ',
                            style: 'margin: 3px 3px 3px 8px;'
                        },
                        {
                            id: 'width',
                            xtype: 'numberfield',
                            value: objAjax.configs.width,
                            width: 250,
                            allowBlank: false,
                            style: 'margin: 3px;'
                        },
                        {
                            xtype : 'label',
                            text : 'Frame height: ',
                            style: 'margin: 3px 3px 3px 8px;'
                        },
                        {
                            id: 'height',
                            xtype: 'numberfield',
                            value: objAjax.configs.height,
                            width: 250,
                            allowBlank: false,
                            style: 'margin: 3px;'
                        },
                        {
                        	xtype: 'button',
                        	text: 'Save',
                        	colspan: 2,
                            width: 150,
                            style: 'margin: 3px 3px 3px 8px;',
                            handler: groupDocsSignature.saveClick
                        }
					]
				});

		var tabPanel = Ext.getCmp("pimcore_panel_tabs");
		tabPanel.add(groupDocsSignature.panel);
		tabPanel.activate("groupdocs_signature_plugin_tab_panel");

		pimcore.layout.refresh();
	}, 
	saveClick : function () {
		var fileid = Ext.getCmp('fileid').getValue();
		var frameborder = Ext.getCmp('frameborder').getValue();
		var width = Ext.getCmp('width').getValue();
		var height = Ext.getCmp('height').getValue();
        Ext.Ajax.request({
					url : '/plugin/GroupDocsSignature/group-docs-signature-admin/savedata',
					params: {
						'fileid' : fileid,
						'frameborder' : frameborder,
						'width' : width,
						'height' : height
					},
					success : function(response, options) {
                        Ext.MessageBox.show({
                                    title : 'GroupDocs Plugin',
                                    msg : 'Operation complete!',
                                    buttons : Ext.MessageBox.OK,
                                    animateTarget : 'mb9',
                                    icon : Ext.MessageBox.SUCCESS
                                });
					},
					failure : function(response, options) {
						Ext.MessageBox.show({
									title : 'GroupDocs Plugin Error',
									msg : 'GroupDocs Plugin Error - can\'t save data!',
									buttons : Ext.MessageBox.OK,
									animateTarget : 'mb9',
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}
});
var groupDocsSignature = new pimcore.plugin.GroupDocsSignature();