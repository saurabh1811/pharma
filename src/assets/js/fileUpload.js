(function ($) {
    var fileUploadCount = 0;

    $.fn.fileUpload = function () {
        return this.each(function () {
            var fileUploadDiv = $(this);
            var fileUploadId = `fileUpload-${++fileUploadCount}`;

            // Creates HTML content for the file upload area.
            var fileDivContent = `

   
                <label for="${fileUploadId}" class="file-upload d-block">
                <div class="upload-file">
                <div class="upload-inner">
                <i class="las la-upload"></i>
                <p>Click to upload or drag & drop here<br>(docx, ppt, pdf, txt) | Max file size: 40MB
                </p>
                </div>
                </div>
                    <input type="file" id="${fileUploadId}" name=[] multiple hidden  />
                </label>
            `;

            fileUploadDiv.html(fileDivContent).addClass("file-container");

            var table = null;
            var tableBody = null;
            // Creates a table containing file information.
            function createTable() {
                table = $(`
                    <div>
                       
                        <div class="listfile">
                        </div>
                    </div>
                `);

                tableBody = table.find(".listfile");
                fileUploadDiv.append(table);
            }

            // Adds the information of uploaded files to table.
            function handleFiles(files) {
                if (!table) {
                    createTable();
                }

                tableBody.empty();
                if (files.length > 0) {
                    $.each(files, function (index, file) {
                        var fileName = file.name;
                        var fileSize = (file.size / 1024).toFixed(2) + " KB";
                        var fileType = file.type;
                        var preview = fileType.startsWith("image")
                            ? `<img src="${URL.createObjectURL(file)}" alt="${fileName}" height="30">`
                            : `<i class="material-icons-outlined">visibility_off</i>`;

                        tableBody.append(`

                        <div class="uploaded-list"><span> ${fileName} | ${fileSize} </span> <div class="alert success">Uploaded successfully <i class="las la-check"></i></div></div>
                            
                        `);
                    });

                    tableBody.find(".deleteBtn").click(function () {
                        $(this).closest("tr").remove();

                        if (tableBody.find("tr").length === 0) {
                            tableBody.append('<tr><td colspan="6" class="no-file">No files selected!</td></tr>');
                        }
                    });
                }
            }

            // Events triggered after dragging files.
            fileUploadDiv.on({
                dragover: function (e) {
                    e.preventDefault();
                    fileUploadDiv.toggleClass("dragover", e.type === "dragover");
                },
                drop: function (e) {
                    e.preventDefault();
                    fileUploadDiv.removeClass("dragover");
                    handleFiles(e.originalEvent.dataTransfer.files);
                },
            });

            // Event triggered when file is selected.
            fileUploadDiv.find(`#${fileUploadId}`).change(function () {
                handleFiles(this.files);
            });
        });
    };
})(jQuery);
