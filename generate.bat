@echo off
setlocal

if "%~1"=="" (
    echo Please provide a name for the module.
    exit /b 1
)

set MODULE_NAME=%~1

:: Generate module without .spec.ts files
echo Generating module...
nest g mo %MODULE_NAME% --no-spec || exit /b

:: Generate controller without .spec.ts files
echo Generating controller...
nest g co %MODULE_NAME% --no-spec || exit /b

:: Generate service without .spec.ts files
echo Generating service...
nest g s %MODULE_NAME% --no-spec || exit /b

echo %MODULE_NAME% module, controller, and service created successfully.

endlocal
pause
