initSidebarItems({"enum":[["Duplicate","Used to control which messages are to be duplicated to stderr, when log_to_file() is used."],["FlexiLoggerError","Describes errors in the initialization of `flexi_logger`."],["Level","An enum representing the available verbosity levels of the logger."],["LevelFilter","An enum representing the available verbosity level filters of the logger."]],"fn":[["default_format","A logline-formatter that produces log lines like  `INFO [my_prog::some_submodule] Task successfully read from conf.json`"],["detailed_format","A logline-formatter that produces log lines like  `[2016-01-13 15:25:01.640870 +01:00] INFO [foo::bar] src/foo/bar.rs:26: Task successfully read from conf.json`  i.e. with timestamp, module path and file location."],["opt_format","A logline-formatter that produces log lines like  `[2016-01-13 15:25:01.640870 +01:00] INFO [src/foo/bar:26] Task successfully read from conf.json`  i.e. with timestamp and file location."],["with_thread","A logline-formatter that produces log lines like  `[2016-01-13 15:25:01.640870 +01:00] T[taskreader] INFO [src/foo/bar:26] Task successfully read from conf.json`  i.e. with timestamp, thread name and file location."]],"mod":[["writers","This module contains a trait for additional log writers, and a configurable concrete implementation for a log writer that writes to a file or a series of files."]],"struct":[["LogSpecBuilder","Builder for `LogSpecification`."],["LogSpecification","Immutable struct that defines which loglines are to be written, based on the module, the log level, and the text."],["Logger","The entry-point for using `flexi_logger`."],["ReconfigurationHandle","Allows reconfiguring the logger programmatically."],["Record","The \"payload\" of a log message."]],"type":[["FormatFunction","Function type for Format functions."]]});