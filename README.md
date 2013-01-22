# Groupdocs Signature

GroupDocs Signature plugin for PimCore CMS (Source)

### Plugin Manual Installation Instructions:

1. Copy plugin folder to '/path-to-installed-pimcore/plugins' directory.
2. Login to pimcore as admin
3. Go to "Extras"=>"Extensions"=>"Manage Extensions"
4. Click button "Enamble/Disable" and "Install/Unistall"

### Installation from PimCore CMS:

1. Login to pimcore as admin
2. Go to "Extras"=>"Extensions"=>"Download Extensions"
3. Find GroupDoca Signature plugin and click "Download" button
3. Go to "Extras"=>"Extensions"=>"Manage Extensions"
4. Click button "Enamble/Disable" and "Install/Unistall"

### GroupDocs Signature plugin using:


For use plugin add code to your view:
```php
<?php $groupDocs = new GroupDocsSignature_GroupDocs(); ?>
<?php echo $groupDocs->renderFrame(); ?>
```

Also you can override default params like:
```php
<?php $groupDocs1 = new GroupDocsSignature_GroupDocs(array( 'formid' => '123', 'frameborder' => '1', 'width' => '680', 'height' => '900' )); ?>
<?php echo $groupDocs1->renderFrame(); ?>
```

#### For configure default params login as admin and go to "Extras" => "Configure GroupDocs Signature"  menu.

###[Sign, Manage, Annotate, Assemble, Compare and Convert Documents with GroupDocs](http://groupdocs.com)
* [Doc to PDF, Doc to Docx, PPT to PDF, and other Document Conversions with GroupDocs Signature](http://groupdocs.com/apps/signature)
* [DOC, DOCX, PDF Signature in your PimCore CMS website] (http://www.pimcore.org/resources/extensions/detail/GroupDocsSignature)
* [See source code for GroupDocs Signature plugin for PimCore CMS](https://github.com/groupdocs/pimcore-groupdocs-signature-source)

###Created by [GroupDocs Marketplace Team](http://groupdocs.com/marketplace/).