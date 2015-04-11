module Service {
    export class BoardService {
        posts_data;
        constructor(private $q, basePath) {
        }

        posts(_groupID) {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
                        {
                            "_id": "551bfb6b2926b18360873cbf",
                            "date": "2014-04-23T18:25:43.511Z",
                            "title": "hey yo",
                            "author": "551bfb6bedba87b86375ad3b",
                            "author_thumbnail": "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ4MDZENzlEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ4MDZEN0FEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDgwNkQ3N0QwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDgwNkQ3OEQwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQD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",
                            "content": "Cillum consectetur proident sit adipisicing ut :something: exercitation :D .",
                            "comments_length": "1"
                        },
                        {
                            "_id": "551bfb6b8f58d0577e3f4c1c",
                            "date": "2013-04-23T18:25:43.511Z",
                            "title": "was geht?",
                            "author": "551bfb6b171cbd94abfb16f4",
                            "author_thumbnail": "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ4MDZENzlEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ4MDZEN0FEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDgwNkQ3N0QwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDgwNkQ3OEQwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQD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",
                            "content": "Ut reprehenderit ullamco ut ex laborum culpa eu.",
                            "comments_length": "3"
                        },
                        {
                            "_id": "551bfb6bc62cc7df95a3a3a9",
                            "date": "2012-04-23T18:25:43.511Z",
                            "title": "huhuhuhu",
                            "author": "551bfb6b64f023b9f876cfa3",
                            "author_thumbnail": "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ4MDZENzlEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ4MDZEN0FEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDgwNkQ3N0QwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDgwNkQ3OEQwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQD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",
                            "content": "Ut occaecat sit aliquip id quis magna irure dolore sint excepteur.",
                            "comments_length": "10000"
                        }
                    ]);
                }, 500);
            });
        }

        comments(_postID) {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
                        {
                            "_id": "551bfb6b2926b18360873cbf",
                            "date": "2014-04-23T18:25:43.511Z",
                            "author": "551bfb6bedba87b86375ad3b",
                            "author_thumbnail": "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ4MDZENzlEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ4MDZEN0FEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDgwNkQ3N0QwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDgwNkQ3OEQwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQD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",
                            "content": "Cillum consectetur proident sit adipisicing ut exercitation."
                        },
                        {
                            "_id": "551bfb6b8f58d0577e3f4c1c",
                            "date": "2013-04-23T18:25:43.511Z",
                            "author": "551bfb6b171cbd94abfb16f4",
                            "author_thumbnail": "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ4MDZENzlEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ4MDZEN0FEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDgwNkQ3N0QwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDgwNkQ3OEQwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQD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",
                            "content": "Ut reprehenderit ullamco ut ex laborum culpa eu."
                        },
                        {
                            "_id": "551bfb6bc62cc7df95a3a3a9",
                            "date": "2012-04-23T18:25:43.511Z",
                            "author": "551bfb6b64f023b9f876cfa3",
                            "author_thumbnail": "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQ4MDZENzlEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ4MDZEN0FEMEEwMTFFNDgxMTc4MTU4MDM2QTlCQkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDgwNkQ3N0QwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDgwNkQ3OEQwQTAxMUU0ODExNzgxNTgwMzZBOUJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQD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",
                            "content": "Ut occaecat sit aliquip id quis magna irure dolore sint excepteur."
                        }
                    ]);
                }, 500);
            });
        }

        static serviceId:string = "BoardService";
    }
}
