tinymce.init({
    selector: '#editor',
    plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
    height: 500,
    setup: function (editor) {
        editor.ui.registry.addButton('customInsertButton', {
            text: 'My Button',
            onAction: function () {
                editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;');
            }
        });
    }
});

function generateHTML() {
    const content = tinymce.get('editor').getContent();
    document.getElementById('output').textContent = formatHtml(content);
}

function copyHTML() {
    const output = document.getElementById('output');
    navigator.clipboard.writeText(output.textContent).then(() => {
        alert('HTML copied to clipboard!');
    });
}

function formatHtml(html) {
    const tab = '  ';
    let result = '';
    let indent = '';

    html.split(/>\s*</).forEach(element => {
        if (element.match(/^\/\w/)) indent = indent.substring(tab.length);
        result += indent + '<' + element + '>\n';
        if (element.match(/^<?\w[^>]*[^/]$/) && !element.startsWith('input')) indent += tab;
    });

    return result.substring(1, result.length - 2);
}
